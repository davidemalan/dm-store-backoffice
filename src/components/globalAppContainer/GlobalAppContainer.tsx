import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useShallow } from 'zustand/shallow';

import useAxios from '../../hooks/useAxios';
import Products from '../../pages/Products';
import Stats from '../../pages/Stats';
import { getStoreById } from '../../services/api';
import { useGlobalStore } from '../../store/hooks';
import { Store } from '../../types/api';
import Loader from '../loader/Loader';

const GlobalAppContainer: React.FC = () => {
  const [hasData, setHasData] = useState(false);
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

      if (!hasData) setHasData(true);
    }
  }, [hasData, setStore, store, storeData]);

  // if loading show loader
  if (error) return <>{error}</>;

  return (
    <ThemeProvider theme={theme}>
      {!hasData || isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter basename="/dm-store-backoffice">
          <Routes>
            <Route
              path="/"
              element={<Products />}
            />
            <Route
              path="/products"
              element={<Products />}
            />
            <Route
              path="/stats"
              element={<Stats />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
};

export default React.memo(GlobalAppContainer);
