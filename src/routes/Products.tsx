import React, { useEffect } from 'react';

import ProductCard from '../components/productCard/ProductCard';
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
        <ul>
          {productsData?.list.map(({ id, data }) => (
            <ProductCard
              key={`productCard_${id}`}
              title={data.title}
              category={data.category}
              price={data.price}
              employee={data.employee}
              description={data.description}
              reviews={data.reviews}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
