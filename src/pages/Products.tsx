import React, { useEffect } from 'react';

import useAxios from '../hooks/useAxios';
import { getProducts } from '../services/api';
import { ProductList } from '../types/api';

const Products: React.FC = () => {
  const { data: productsData, error, apiWrapper } = useAxios<ProductList>();

  // get the product list
  useEffect(() => {
    apiWrapper(getProducts);
  }, [apiWrapper]);

  return (
    <div>
      {error ? (
        <>error retrieving Products data: {error}</>
      ) : (
        productsData?.list.map(({ id, data }) => <li key={id}>{data.title}</li>)
      )}
    </div>
  );
};

export default Products;
