import { FC, ReactElement, useState } from 'react';

import Button from '../button/Button';
import { Remove } from '../icons/Remove';
import Modal from '../modal/Modal';

import Styled from './ProductCard.styles';

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
}

const ProductCard: FC<ProductCardProps> = ({
  title,
  category,
  price,
  employee,
  description,
  reviews,
}): ReactElement => {
  const [showModal, setShowModal] = useState(false);

  // remove void reviews
  const validReviews = reviews.filter((review) => !!review);

  const removeProduct = () => {
    console.log(removeProduct);

    setShowModal(true);
  };

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

          <Styled.ModalButtonGroup>
            <Button
              onClick={removeProduct}
              backgroundColor="#cc2e2e"
              backgroundHoverColor="#b62a2a"
              color="#fff"
            >
              Delete
            </Button>
            <Button
              backgroundColor="#ededed"
              backgroundHoverColor="#a3a3a3"
              color="#000"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          </Styled.ModalButtonGroup>
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
