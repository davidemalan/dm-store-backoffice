import React, { FC, useEffect, useState } from 'react';

import Modal from '../components/modal/Modal';
import ProductCard from '../components/productCard/ProductCard';
import useAxios from '../hooks/useAxios';
import { getProducts } from '../services/api';
import { ProductList } from '../types/api';

const Products: FC = (): React.ReactElement => {
  const { data: productsData, error, apiWrapper } = useAxios<ProductList>();
  const [showModal, setShowModal] = useState(false);

  // get the product list
  useEffect(() => {
    apiWrapper(getProducts);
  }, [apiWrapper]);

  return (
    <div>
      {error ? (
        <>error retrieving Products data: {error}</>
      ) : (
        <>
          <button onClick={() => setShowModal(true)}>Add new Product</button>
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
          {showModal && <Modal closeModal={() => setShowModal(false)} />}
        </>
      )}
    </div>
  );
};

export default Products;
