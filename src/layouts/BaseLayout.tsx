import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'usehooks-ts';

import Sidebar from '../components/sidebar/Sidebar';

import Styled from './BaseLayout.styles';

// base layout with outlet for routes
const BaseLayout: FC = (): ReactElement => {
  const { up } = useTheme().breakpoints;
  // replace media because the up function returns it as part of the string
  const isMd = useMediaQuery(up('md').replace('@media ', ''));

  return (
    <Styled.LayoutWrapper>
      {/* Sidebar */}
      {isMd && <Sidebar />}

      {/* Right content route */}
      <Styled.MainContainer>
        <Outlet />
      </Styled.MainContainer>
    </Styled.LayoutWrapper>
  );
};

export default BaseLayout;
