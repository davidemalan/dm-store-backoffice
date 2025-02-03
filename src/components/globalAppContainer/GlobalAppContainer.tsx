import { FC, memo, ReactElement, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { useShallow } from 'zustand/shallow';

import useAxios from '../../hooks/useAxios';
import Layout from '../../layouts/BaseLayout';
import Products from '../../routes/Products';
import Stats from '../../routes/Stats';
import { getStoreById } from '../../services/api';
import { useGlobalStore } from '../../store/hooks';
import { Store } from '../../types/api';
import Loader from '../loader/Loader';

const GlobalAppContainer: FC = (): ReactElement => {
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
    if (storeData && storeData.data !== store) {
      setStore(storeData.data);
    }
  }, [setStore, store, storeData]);

  // if loading show loader
  if (error) return <>{error}</>;

  return (
    <ThemeProvider theme={theme}>
      {!storeData || isLoading ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter basename="/dm-store-backoffice">
            <Routes>
              <Route
                path="/"
                element={<Layout />}
              >
                {/* base to products */}
                <Route
                  path="/"
                  element={<Products />}
                />
                {/* products */}
                <Route
                  path="/products"
                  element={<Products />}
                />
                {/* stats */}
                <Route
                  path="/stats"
                  element={<Stats />}
                />
                {/* fallback */}
                <Route
                  path="*"
                  element={<Products />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </ThemeProvider>
  );
};

export default memo(GlobalAppContainer);
