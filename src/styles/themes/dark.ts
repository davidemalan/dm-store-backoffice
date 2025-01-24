import { Theme, ThemeTypes } from '../../types/theme';

// dark theme
export const darkTheme: Theme = {
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
