import { useEffect } from 'react';

import useAxios from './hooks/useAxios';
import { getStoreById } from './services/api';

const App: React.FC = () => {
  const { data, error, isLoading, apiWrapper } = useAxios();

  useEffect(() => {
    console.log('loading', isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    apiWrapper(getStoreById);
    // apiWrapper(() => getProductById('blallo'));
  }, [apiWrapper]);

  if (isLoading) return <>loading...</>;

  if (error) return <>{error}</>;

  return <>pippo</>;
};

export default App;
