import { Theme, ThemeTypes } from '../../types/theme';

import { baseTheme } from './base';

// dark theme
export const darkTheme: Theme = {
  ...baseTheme,
  name: ThemeTypes.dark,
  primary: 'red',
  accent: '#BF4F74',
  main: {
    bg: '#494d55',
    fg: '#ffffff',
  },
  sidebar: {
    bg: '#272727',
    fg: '#b3b8bc',
  },
  switch: {
    bg: '#494d55',
    fg: 'black',
  },
  button: {
    bg: 'black',
    fg: '#ffffff',
  },
  card: {
    bg: '#272727',
    fg: '#b3b8bc',
  },
  review: {
    bg: '#ededed',
    fg: 'black',
  },
};
