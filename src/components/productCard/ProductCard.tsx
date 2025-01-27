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
  return (
    <Styled.CardContainer>
      <Styled.CardHeader>
        <h2>{title}</h2>
        <h4>{`${price}€`}</h4>
      </Styled.CardHeader>
      <div>{description}</div>
      <Styled.ReviewList>
        {reviews.map((review, i) => (
          <p key={`review_${i}`}>{review}</p>
        ))}
      </Styled.ReviewList>
      <Styled.CardFooter>
        <span>{employee}</span>
        <Styled.CategoryTag>{category}</Styled.CategoryTag>
      </Styled.CardFooter>
    </Styled.CardContainer>
  );
};

export default ProductCard;
