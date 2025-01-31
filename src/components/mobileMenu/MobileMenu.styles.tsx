import { styled } from 'styled-components';

import { colors } from '../../consts';

const MenuButton = styled.button<{
  $isOpen?: boolean;
}>`
  position: absolute;
  z-index: 9;
  top: 20px;
  right: 20px;
  color: ${colors.white};
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
`;

export default {
  MenuButton,
  Overlay,
};
