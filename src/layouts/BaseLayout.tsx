import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router';

import Sidebar from '../components/sidebar/Sidebar';

import Styled from './BaseLayout.styles';

// base layout with outlet for routes
const BaseLayout: FC = (): ReactElement => {
  return (
    <Styled.LayoutWrapper>
      {/* Sidebar */}
      <Sidebar />

      {/* Right content route */}
      <Styled.MainContainer>
        <Outlet />
      </Styled.MainContainer>
    </Styled.LayoutWrapper>
  );
};

export default BaseLayout;
