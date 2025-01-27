import { Outlet } from 'react-router';

import Header from '../components/header/Header';

import Styled from './BaseLayout.styles';

// base layout with outlet for routes
const BaseLayout: React.FC = () => {
  return (
    <Styled.LayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
    </Styled.LayoutWrapper>
  );
};

export default BaseLayout;
