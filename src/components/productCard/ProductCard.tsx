import Styled from './ProductCard.styles';

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, category, price, employee, description, reviews }) => {
  // remove void reviews
  const validReviews = reviews.filter((review) => !!review);

  return (
    <Styled.CardContainer>
      {/* Card top */}
      <Styled.CardHeader>
        <h2>{title}</h2>
        <h4>{`${price}€`}</h4>
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
  );
};

export default ProductCard;
