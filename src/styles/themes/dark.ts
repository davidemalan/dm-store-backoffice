import { Theme, ThemeTypes } from '../../types/theme';

import { baseTheme } from './base';

// dark theme
export const darkTheme: Theme = {
  ...baseTheme,
  name: ThemeTypes.dark,
  primary: 'red',
  accent: '#BF4F74',
  main: {
    bg: '#000000',
    fg: '#ffffff',
  },
  sidebar: {
    bg: '#494d55',
    fg: '#ffffff',
  },
  switch: {
    bg: '#BF4F74',
    fg: 'black',
  },
  button: {
    bg: 'black',
    fg: '#ffffff',
  },
  card: {
    bg: '#ededed',
    fg: 'black',
  },
};
