import { Link } from 'react-router';

import logo from '../../assets/logo.png';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

import Styled from './Sidebar.styles';

const Sidebar: React.FC = () => {
  return (
    <Styled.SidebarWrapper>
      {/* Logo */}
      <Styled.LogoLink to="/">
        <img
          src={logo}
          alt="logo"
          width={48}
          height={48}
        />
        <Styled.LogoContainer>
          DM <br /> STORE
        </Styled.LogoContainer>
      </Styled.LogoLink>

      {/* router navs */}
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

      {/* Switcher */}
      <ThemeSwitcher />
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
