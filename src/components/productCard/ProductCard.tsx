import { FC, ReactElement, useEffect, useState } from 'react';

import useAxios from '../../hooks/useAxios';
import { deleteProduct } from '../../services/api';
import Button from '../button/Button';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Remove } from '../icons/Remove';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';

import Styled from './ProductCard.styles';

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
  updateProducts: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  category,
  price,
  employee,
  description,
  reviews,
  updateProducts,
}): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  // remove void reviews
  const validReviews = reviews.filter((review) => !!review);

  const { data: productData, error, isLoading, apiWrapper } = useAxios();

  const handleConfirm = () => {
    apiWrapper(() => deleteProduct(id));
  };

  useEffect(() => {
    // on 200 response data in void, but not undefined
    if (productData !== undefined) {
      updateProducts();

      setShowModal(false);
    }
  }, [productData, updateProducts]);

  // on error show message for 2 sec
  const handleErrorMessage = (message: string) => {
    setErrorMessage(message);

    setTimeout(() => {
      setErrorMessage(undefined);
    }, 2000);
  };

  useEffect(() => {
    if (error) {
      handleErrorMessage(error);
    }
  }, [error]);

  return (
    <>
      <Styled.CardWrapper>
        <Styled.CardContainer>
          {/* Card top */}
          <Styled.CardHeader>
            <div>
              <h2>{title}</h2>
              <h4>{`${price}€`}</h4>
            </div>
            <Button
              backgroundColor="#cc2e2e"
              backgroundHoverColor="#b62a2a"
              onClick={() => setShowModal(true)}
              rounded
            >
              <Remove
                title="Remove product"
                color="#fff"
              />
            </Button>
          </Styled.CardHeader>

          {/* Card description */}
          <p>{description}</p>

          {/* Card reviews */}
          {!!validReviews.length && (
            <Styled.ReviewList>
              {validReviews.map((review, i) => (
                <p key={`review_${i}`}>{review}</p>
              ))}
            </Styled.ReviewList>
          )}

          {/* Card bottom */}
          <Styled.CardFooter>
            <span>{employee}</span>
            <Styled.CategoryTag>{category}</Styled.CategoryTag>
          </Styled.CardFooter>
        </Styled.CardContainer>
      </Styled.CardWrapper>

      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <h2>You are going to delete the product:</h2>
          <br />
          <Styled.ModalTitle>{title}</Styled.ModalTitle>

          {/* buttons */}
          <Styled.ModalButtonGroup>
            {isLoading ? (
              <Loader />
            ) : (
              <Button
                onClick={handleConfirm}
                backgroundColor="#cc2e2e"
                backgroundHoverColor="#b62a2a"
                color="#fff"
              >
                Delete
              </Button>
            )}
            <Button
              backgroundColor="#ededed"
              backgroundHoverColor="#a3a3a3"
              color="#000"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          </Styled.ModalButtonGroup>

          {/* error message pop up */}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
