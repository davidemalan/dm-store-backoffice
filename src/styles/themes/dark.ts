import { colors } from '../../consts';
import { Theme, ThemeTypes } from '../../types/theme';

import { baseTheme } from './base';

// dark theme
export const darkTheme: Theme = {
  ...baseTheme,
  name: ThemeTypes.dark,
  accent: colors.white,
  text: colors.white,
  main: {
    bg: colors.gray600,
    fg: colors.white,
  },
  sidebar: {
    bg: colors.gray700,
    fg: colors.gray400,
  },
  switch: {
    bg: colors.gray600,
    fg: colors.black,
  },
  card: {
    bg: colors.gray700,
    fg: colors.gray400,
  },
  review: {
    bg: colors.gray200,
    fg: colors.black,
  },
  viewButtons: {
    activeBg: colors.gray400,
    activeFg: colors.black,
    bg: colors.gray200,
    fg: colors.black,
  },
};
