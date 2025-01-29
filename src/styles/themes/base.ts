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
  accent: 'aqua',
  main: {
    bg: '#ffffff',
    fg: '#000000',
  },
  sidebar: {
    bg: '#494d55',
    fg: '#ffffff',
  },
  switch: {
    bg: '#ffffff',
    fg: '#272727',
  },
  button: {
    bg: 'white',
    fg: '#BF4F74',
  },
  card: {
    bg: '#ededed',
    fg: 'black',
  },
  review: {
    bg: '#fff',
    fg: '#555555',
  },
  ...theme,
};
