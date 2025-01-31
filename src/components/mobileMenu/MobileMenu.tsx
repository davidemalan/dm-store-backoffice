import { FC, ReactElement, useState } from 'react';
import { useTheme } from 'styled-components';

import { colors } from '../../consts';
import { Close } from '../icons/Close';
import { Menu } from '../icons/Menu';
import Sidebar from '../sidebar/Sidebar';

import Styled from './MobileMenu.styles';

const MobileMenu: FC = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState(false);

  const { text } = useTheme();

  return (
    <>
      {/* open menu */}
      <button onClick={() => setOpenMenu(!openMenu)}>
        <Menu
          title="Menu"
          color={text}
        />
      </button>

      {/* menu overlay and sidebar */}
      {openMenu && (
        <Styled.Overlay>
          <Styled.MenuButton onClick={() => setOpenMenu(!openMenu)}>
            <Close color={colors.white} />
          </Styled.MenuButton>
          <Sidebar />
        </Styled.Overlay>
      )}
    </>
  );
};

export default MobileMenu;
