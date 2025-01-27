import { createStyledBreakpointsTheme } from 'styled-breakpoints';

import { Theme, ThemeTypes } from '../../types/theme';

// create breakpoint object and pass to theme
export const theme = createStyledBreakpointsTheme({
  breakpoints: {
    xs: '375px',
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    xxl: '2000px',
  },
});

// light theme as base one
export const baseTheme: Theme = {
  name: ThemeTypes.light,
  primary: 'blue',
  switch: {
    bg: '#b6b6b6',
    fg: '#ffffff',
  },
  button: {
    fg: '#BF4F74',
    bg: 'white',
  },
  ...theme,
};
