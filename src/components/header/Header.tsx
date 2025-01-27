import { Link } from 'react-router';

import Styled from './Header.styles';

const Header: React.FC = () => {
  return (
    <Styled.HeaderWrapper>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
        </ul>
      </nav>
    </Styled.HeaderWrapper>
  );
};

export default Header;
