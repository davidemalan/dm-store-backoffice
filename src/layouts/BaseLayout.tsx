import { Outlet } from 'react-router';

import Sidebar from '../components/sidebar/Sidebar';

import Styled from './BaseLayout.styles';

// base layout with outlet for routes
const BaseLayout: React.FC = () => {
  return (
    <Styled.LayoutWrapper>
      <Sidebar />
      <Styled.MainContainer>
        <Outlet />
      </Styled.MainContainer>
    </Styled.LayoutWrapper>
  );
};

export default BaseLayout;
