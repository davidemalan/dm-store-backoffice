import { Theme, ThemeTypes } from '../../types/theme';

import { baseTheme } from './base';

// dark theme
export const darkTheme: Theme = {
  ...baseTheme,
  name: ThemeTypes.dark,
  primary: 'red',
  accent: 'aqua',
  sidebar: {
    bg: '#b6b6b6',
    fg: '#000000',
  },
  switch: {
    bg: '#BF4F74',
    fg: 'black',
  },
  button: {
    fg: '#ffffff',
    bg: 'black',
  },
};
