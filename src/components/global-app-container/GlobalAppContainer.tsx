import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useShallow } from 'zustand/shallow';

import useAxios from '../../hooks/useAxios';
import { getStoreById } from '../../services/api';
import { useGlobalStore } from '../../store/hooks';
import { baseTheme } from '../../styles/themes/base';
import { darkTheme } from '../../styles/themes/dark';
import { Store } from '../../types/api';
import { ThemeTypes } from '../../types/theme';
import Loader from '../loader/Loader';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

const GlobalAppContainer: React.FC = () => {
  const { data: storeData, error, isLoading, apiWrapper } = useAxios<Store>();

  // get store value and setstore fn
  // from zustand v5 use shallow avoids infinite re rendering loops
  const [store, setStore] = useGlobalStore(useShallow((state) => [state.store, state.setStore]));

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

  // THEME
  const [currentTheme, setTheme] = useState(baseTheme);

  const switchTheme = () => {
    setTheme(currentTheme.name === ThemeTypes.light ? darkTheme : baseTheme);
  };

  // if loading show loader
  if (isLoading) return <Loader />;

  // if loading show loader
  if (error) return <>{error}</>;

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeSwitcher switchTheme={switchTheme} />
    </ThemeProvider>
  );
};

export default GlobalAppContainer;
