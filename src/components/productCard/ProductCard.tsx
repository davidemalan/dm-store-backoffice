import { FC, ReactElement, useEffect, useState } from 'react';

import { colors } from '../../consts';
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
  gridView?: boolean;
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
  gridView = false,
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

  const reviewView = () => {
    if (gridView) {
      // grid view
      return (
        <Styled.ReviewOverlay>
          {/* slice in case of grid as it could take too much space */}
          {validReviews.slice(0, 3).map((review, i) => (
            <p key={`review_${i}`}>{review}</p>
          ))}
        </Styled.ReviewOverlay>
      );
    } else {
      // list view
      return (
        <Styled.ReviewList>
          {validReviews.map((review, i) => (
            <p key={`review_${i}`}>{review}</p>
          ))}
        </Styled.ReviewList>
      );
    }
  };
  return (
    <>
      <Styled.CardWrapper>
        <Styled.CardContainer $gridView={gridView}>
          <div>
            {/* Card top */}
            <Styled.CardHeader>
              <div>
                <h2>{title}</h2>
                <h4>{`${price}€`}</h4>
              </div>
              <Button
                backgroundColor={colors.red}
                backgroundHoverColor={colors.darkRed}
                onClick={() => setShowModal(true)}
                rounded
              >
                <Remove
                  title="Remove product"
                  color={colors.white}
                />
              </Button>
            </Styled.CardHeader>

            {/* Card description */}
            <p>{description}</p>
          </div>

          {/* Card reviews */}
          {!!validReviews.length && reviewView()}

          {/* Card bottom */}
          <Styled.CardFooter>
            <Styled.Employee>{employee}</Styled.Employee>
            <Styled.CategoryTag>{category}</Styled.CategoryTag>
          </Styled.CardFooter>
        </Styled.CardContainer>
      </Styled.CardWrapper>

      {/* confirm modal */}
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
                backgroundColor={colors.red}
                backgroundHoverColor={colors.darkRed}
                color={colors.white}
              >
                Delete
              </Button>
            )}
            <Button
              backgroundColor={colors.gray200}
              backgroundHoverColor={colors.gray300}
              color={colors.black}
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
