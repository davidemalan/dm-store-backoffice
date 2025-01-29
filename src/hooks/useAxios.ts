import axios from 'axios';
import { useCallback, useState } from 'react';

import { AxiosFunction, UseAxiosResponse } from '../types/axios';

// generic function to wrap api calls in errors checks and loading
const useAxios = <T>(): UseAxiosResponse<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  // useCallback in order to avoid rerendering infinite loops
  const apiWrapper = useCallback(async (axiosMethod: AxiosFunction<T>) => {
    setIsLoading(true);

    try {
      // call the method
      const response = await axiosMethod();

      setData(response.data);
    } catch (err) {
      // if axios abort on timeout, print message
      if (axios.isCancel(err)) {
        console.error('Request timeout');
        setError('Request timeout');
      } else if (axios.isAxiosError(err) && err.response) {
        // if axios error, manage message
        setError(`${err.response.data.message}`);
      } else {
        // if normal error, print it
        setError(`Api Error: ${err}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, error, isLoading, apiWrapper };
};

export default useAxios;
