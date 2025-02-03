import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';

import Button from '../components/button/Button';
import Loader from '../components/loader/Loader';
import Modal from '../components/modal/Modal';
import ProductCard from '../components/productCard/ProductCard';
import ProductForm from '../components/productForm/ProductForm';
import ProductsHeader from '../components/productsHeader/ProductsHeader';
import { colors } from '../consts';
import usePagination from '../hooks/usePagination';
import { useGlobalStore } from '../store/hooks';
import { ProductsView } from '../types/store';

import Styled from './Products.styles';

const Products: FC = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);

  const { data: productsData, isLoading, error, hasMore, loadProducts, reloadAll } = usePagination();

  const [productList, setProducts, productsView] = useGlobalStore(
    useShallow((state) => [state.productList, state.setProducts, state.productsView])
  );

  // useCallback in order to avoid rerendering infinite loops
  const reloadProducts = () => {
    reloadAll();

    setShowModal(false);
  };

  // get the product list, no array as the loadProducts re renders in loop
  useEffect(() => {
    loadProducts();
  }, []);

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
          {productsView === ProductsView.LIST_VIEW ? (
            <ul>
              {productList?.map(({ id, data }) => (
                <ProductCard
                  id={id}
                  key={`productCard_${id}`}
                  title={data.title}
                  category={data.category}
                  price={data.price}
                  employee={data.employee}
                  description={data.description}
                  reviews={data.reviews}
                  updateProducts={reloadProducts}
                />
              ))}
            </ul>
          ) : (
            <Styled.ProductsContainer>
              {productList?.map(({ id, data }) => (
                <ProductCard
                  id={id}
                  key={`productCard_${id}`}
                  title={data.title}
                  category={data.category}
                  price={data.price}
                  employee={data.employee}
                  description={data.description}
                  reviews={data.reviews}
                  updateProducts={reloadProducts}
                  gridView
                />
              ))}
            </Styled.ProductsContainer>
          )}

          {/* load more button*/}
          {hasMore && (
            <Styled.LoadMoreContainer>
              {isLoading ? (
                <Loader />
              ) : (
                <Button
                  backgroundColor={colors.gray200}
                  backgroundHoverColor={colors.gray300}
                  color={colors.black}
                  onClick={loadProducts}
                >
                  Load More
                </Button>
              )}
            </Styled.LoadMoreContainer>
          )}

          {/* new product modal*/}
          {showModal && (
            <Modal closeModal={() => setShowModal(false)}>
              <ProductForm updateProducts={reloadProducts} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
