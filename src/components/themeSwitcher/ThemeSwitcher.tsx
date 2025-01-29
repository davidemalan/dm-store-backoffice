import { FC, ReactElement, useState } from 'react';
import { useShallow } from 'zustand/shallow';

import { useGlobalStore } from '../../store/hooks';
import { baseTheme } from '../../styles/themes/base';
import { darkTheme } from '../../styles/themes/dark';
import { ThemeTypes } from '../../types/theme';
import Moon from '../icons/Moon';
import Sun from '../icons/Sun';

import Styled from './ThemeSwitcher.styles';

const ThemeSwitcher: FC = (): ReactElement => {
  const [isToggled, setIsToggled] = useState(false);

  const [theme, setTheme] = useGlobalStore(useShallow((state) => [state.theme, state.setTheme]));

  // set toggle for appereance and set theme in context
  const onToggle = () => {
    setIsToggled(!isToggled);
    setTheme(theme.name === ThemeTypes.light ? darkTheme : baseTheme);
  };

  return (
    <Styled.SwitcherContainer>
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
    </Styled.SwitcherContainer>
  );
};

export default ThemeSwitcher;
