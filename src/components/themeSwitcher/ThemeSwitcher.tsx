import { FC, ReactElement } from 'react';
import { useShallow } from 'zustand/shallow';

import { useGlobalStore } from '../../store/hooks';
import { baseTheme } from '../../styles/themes/base';
import { darkTheme } from '../../styles/themes/dark';
import { ThemeTypes } from '../../types/theme';
import Moon from '../icons/Moon';
import Sun from '../icons/Sun';

import Styled from './ThemeSwitcher.styles';

const ThemeSwitcher: FC = (): ReactElement => {
  const [theme, setTheme] = useGlobalStore(useShallow((state) => [state.theme, state.setTheme]));

  // set theme in context
  const onToggle = () => {
    setTheme(theme.name === ThemeTypes.light ? darkTheme : baseTheme);
  };

  // keep track of toggle between mobile and desktop menu
  const isToggled = theme.name === ThemeTypes.dark;

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
