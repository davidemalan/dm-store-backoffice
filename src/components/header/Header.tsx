import { Link } from 'react-router';

import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

import Styled from './Header.styles';

const Header: React.FC = () => {
  return (
    <Styled.HeaderWrapper>
      <Link to="/">DM Store</Link>
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
    </Styled.HeaderWrapper>
  );
};

export default Header;
