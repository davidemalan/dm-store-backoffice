import { Outlet } from 'react-router';

import Header from '../components/header/Header';

import Styled from './BaseLayout.styles';

// base layout with outlet for routes
const BaseLayout: React.FC = () => {
  return (
    <Styled.LayoutWrapper>
      <Header />
      <Styled.MainContainer>
        <Outlet />
      </Styled.MainContainer>
    </Styled.LayoutWrapper>
  );
};

export default BaseLayout;
