import { Link } from 'react-router';
import { styled } from 'styled-components';

const HeaderWrapper = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  background-color: ${({ theme }) => theme.sidebar.bg};
  color: ${({ theme }) => theme.sidebar.fg};
`;

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    border-bottom: 2px solid transparent;

    &:hover {
      border-color: ${({ theme }) => theme.accent};
    }
  }
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
