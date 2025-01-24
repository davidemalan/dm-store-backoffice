import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useShallow } from 'zustand/shallow';

import useAxios from '../../hooks/useAxios';
import { getStoreById } from '../../services/api';
import { useGlobalStore } from '../../store/hooks';
import { Store } from '../../types/api';
import Loader from '../loader/Loader';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

const GlobalAppContainer: React.FC = () => {
  const { data: storeData, error, isLoading, apiWrapper } = useAxios<Store>();

  // get store values and fn
  // from zustand v5 use shallow avoids infinite re rendering loops
  const [store, theme, setStore] = useGlobalStore(useShallow((state) => [state.store, state.theme, state.setStore]));

  // call the first store fetch on load
  useEffect(() => {
    apiWrapper(getStoreById);
  }, [apiWrapper]);

  // update store
  useEffect(() => {
    if (storeData && storeData !== store) {
      setStore(storeData);
    }
  }, [setStore, store, storeData]);

  // if loading show loader
  if (error) return <>{error}</>;

  return <ThemeProvider theme={theme}>{isLoading ? <Loader /> : <ThemeSwitcher />}</ThemeProvider>;
};

export default GlobalAppContainer;
