import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';

import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';
import ProductCard from '../components/productCard/ProductCard';
import ProductForm from '../components/productForm/ProductForm';
import useAxios from '../hooks/useAxios';
import { getProducts } from '../services/api';
import { useGlobalStore } from '../store/hooks';
import { ProductList } from '../types/api';

const Products: FC = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);

  const { data: productsData, error, apiWrapper } = useAxios<ProductList>();

  const [productList, setProducts] = useGlobalStore(useShallow((state) => [state.productList, state.setProducts]));

  // useCallback in order to avoid rerendering infinite loops
  const updateProducts = useCallback(() => {
    apiWrapper(getProducts);

    setShowModal(false);
  }, [apiWrapper]);

  // get the product list
  useEffect(() => {
    updateProducts();
  }, [apiWrapper, updateProducts]);

  // set data in store
  useEffect(() => {
    setProducts(productsData);
  }, [productsData, setProducts]);

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
            {productList?.list.map(({ id, data }) => (
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
          {showModal && (
            <Modal closeModal={() => setShowModal(false)}>
              <ProductForm updateProducts={updateProducts} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
