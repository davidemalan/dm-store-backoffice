import { useState } from 'react';

import Moon from '../icons/Moon';
import Sun from '../icons/Sun';

import Styled from './ThemeSwitcher.styles';

export interface SwitcherProps {
  switchTheme: () => void;
}

const ThemeSwitcher: React.FC<SwitcherProps> = ({ switchTheme }) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    switchTheme();
  };

  return (
    <>
      <Sun />

      <Styled.SwitcherWrapper>
        <input
          type="checkbox"
          name="dark-mode"
          id="dark-mode"
          checked={isToggled}
          onChange={onToggle}
        />
        <Styled.Switch className={isToggled ? 'dark' : ''} />
      </Styled.SwitcherWrapper>

      <Moon />
    </>
  );
};

export default ThemeSwitcher;
