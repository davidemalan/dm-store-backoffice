import { Link } from 'react-router';
import { styled } from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  gap: 50px;
  padding: 20px;
  justify-content: space-between;
`;

const LinksWrapper = styled.ul`
  display: flex;
  gap: 10px;
`;

const RouterLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
`;

export default {
  HeaderWrapper,
  LinksWrapper,
  RouterLink,
};
