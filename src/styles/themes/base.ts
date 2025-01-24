import { Theme, ThemeTypes } from '../../types/theme';

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
};
