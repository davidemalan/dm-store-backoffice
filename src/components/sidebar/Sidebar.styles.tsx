import { Link } from 'react-router';
import { styled } from 'styled-components';

import { colors } from '../../consts';

const SidebarWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  background-color: ${({ theme }) => theme.sidebar.bg};
  color: ${({ theme }) => theme.sidebar.fg};
  position: fixed;
  width: 140px;
`;

const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 22px;
`;

const RouterLink = styled(Link)`
  font-size: 18px;
  border-bottom: 2px solid ${colors.transparent};

  &:hover {
    font-weight: bold;
    border-color: ${({ theme }) => theme.accent};
  }
`;

export default {
  SidebarWrapper,
  LogoLink,
  LinksWrapper,
  LogoContainer,
  RouterLink,
};
