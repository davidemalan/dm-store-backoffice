import React, { FC, useEffect, useState } from 'react';

import Button from '../components/button/Button';
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
          <Button
            onClick={() => setShowModal(true)}
            color="#fff"
            backgroundColor="#2ecc71"
            backgroundHoverColor="#25a85c"
          >
            Add new Product
          </Button>
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
