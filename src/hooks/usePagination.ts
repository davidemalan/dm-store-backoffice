import { useCallback, useEffect, useState } from 'react';

import { PRODUCTS_PER_PAGE } from '../consts';
import { getProducts } from '../services/api';
import { Pagination, Product, ProductList } from '../types/api';

import useAxios from './useAxios';

// generic function to wrap api calls in errors checks and loading
const usePagination = (): Pagination => {
  const [data, setData] = useState<Product[]>();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: productsData, isLoading, error, apiWrapper } = useAxios<ProductList>();

  // useCallback in order to avoid rerendering infinite loops
  const loadProducts = useCallback(async () => {
    apiWrapper(() => getProducts(page));
  }, [apiWrapper, page]);

  // reload all to update list when delete or add
  const reloadAll = useCallback(async () => {
    try {
      const newData = await getProducts(1, page * PRODUCTS_PER_PAGE);

      setData(newData.data.list);
    } catch (error) {
      console.error(`error reloading data: ${error}`);
    }
  }, [page]);

  // on data update, push new data in final array
  useEffect(() => {
    if (productsData) {
      setData((prevData) => {
        if (prevData?.length && productsData.length) {
          const lastNewItem = productsData.list[productsData.length - 1];

          const hasItem = prevData.find((item) => item.id === lastNewItem.id);

          // if last item data is already present don't update (mainly duplicating because of react strict mode)
          if (hasItem) {
            console.warn('Duplicate data detected, skipping update.');

            return prevData;
          }
        }

        return [...(prevData || []), ...productsData.list];
      });

      // set page as new one
      setPage((prevPage) => prevPage + 1);

      if (productsData.length < PRODUCTS_PER_PAGE) {
        setHasMore(false);
      }
    }
  }, [productsData]);

  return { data, isLoading, error, hasMore, loadProducts, reloadAll };
};

export default usePagination;
