import { Link } from 'react-router';

import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

import Styled from './Sidebar.styles';

const Sidebar: React.FC = () => {
  return (
    <Styled.SidebarWrapper>
      <Link to="/">
        <Styled.LogoContainer>
          DM <br /> Store
        </Styled.LogoContainer>
      </Link>
      <nav>
        <Styled.LinksWrapper>
          <li>
            <Styled.RouterLink to="/products">Products</Styled.RouterLink>
          </li>
          <li>
            <Styled.RouterLink to="/stats">Stats</Styled.RouterLink>
          </li>
        </Styled.LinksWrapper>
      </nav>
      <ThemeSwitcher />
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
