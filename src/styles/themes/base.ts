import { breakpointsTheme, colors } from '../../consts';
import { Theme, ThemeTypes } from '../../types/theme';

// light theme as base one
export const baseTheme: Theme = {
  name: ThemeTypes.light,
  accent: colors.white,
  text: colors.black,
  main: {
    bg: colors.white,
    fg: colors.black,
  },
  sidebar: {
    bg: colors.gray600,
    fg: colors.white,
  },
  switch: {
    bg: colors.white,
    fg: colors.gray700,
  },
  card: {
    bg: colors.gray200,
    fg: colors.black,
  },
  review: {
    bg: colors.white,
    fg: colors.gray600,
  },
  viewButtons: {
    activeBg: colors.gray200,
    activeFg: colors.black,
    bg: colors.white,
    fg: colors.black,
  },
  ...breakpointsTheme,
};
