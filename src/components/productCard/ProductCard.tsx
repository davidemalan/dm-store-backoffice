import { FC, ReactElement } from 'react';

import Button from '../button/Button';
import { Remove } from '../icons/Remove';

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
  // remove void reviews
  const validReviews = reviews.filter((review) => !!review);

  const removeProduct = () => {
    console.log(removeProduct);
  };

  return (
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
            onClick={removeProduct}
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
  );
};

export default ProductCard;
