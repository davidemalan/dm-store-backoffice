import { Theme, ThemeTypes } from '../../types/theme';

import { baseTheme } from './base';

// dark theme
export const darkTheme: Theme = {
  ...baseTheme,
  name: ThemeTypes.dark,
  primary: 'red',
  switch: {
    bg: '#BF4F74',
    fg: 'black',
  },
  button: {
    fg: '#ffffff',
    bg: 'black',
  },
};
