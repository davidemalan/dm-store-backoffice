import { styled } from 'styled-components';

const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px 20px;
  margin: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default {
  ProductsContainer,
};
