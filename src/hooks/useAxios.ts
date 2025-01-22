import axios, { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';

type FetchFunction<T> = (...args: any[]) => Promise<AxiosResponse<T>>;

interface UseAxiosResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  fetchData: (fetchMethod: FetchFunction<T>) => void;
}

const useAxios = <T>(): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (fetchMethod: FetchFunction<T>) => {
    setLoading(true);

    try {
      const response = await fetchMethod();

      setData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(`${err.response?.data.message}`);
      } else {
        setError(`Api Error: ${err}`);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, fetchData };
};

export default useAxios;
