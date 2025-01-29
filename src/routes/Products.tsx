import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';

import Modal from '../components/modal/Modal';
import ProductCard from '../components/productCard/ProductCard';
import ProductForm from '../components/productForm/ProductForm';
import ProductsHeader from '../components/productsHeader/ProductsHeader';
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
          {/* heading with add button and view switcher */}
          <ProductsHeader showModal={() => setShowModal(true)} />

          {/* products */}
          <ul>
            {productList?.list.map(({ id, data }) => (
              <ProductCard
                id={id}
                key={`productCard_${id}`}
                title={data.title}
                category={data.category}
                price={data.price}
                employee={data.employee}
                description={data.description}
                reviews={data.reviews}
                updateProducts={updateProducts}
              />
            ))}
          </ul>

          {/* new product modal*/}
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
