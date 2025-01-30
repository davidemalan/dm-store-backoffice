import { createStyledBreakpointsTheme } from 'styled-breakpoints';

export interface Theme extends ReturnType<typeof createStyledBreakpointsTheme> {
  name: string;
  primary: string;
  accent: string;
  main: {
    bg: string;
    fg: string;
  };
  sidebar: {
    bg: string;
    fg: string;
  };
  switch: {
    bg: string;
    fg: string;
  };
  button: {
    bg: string;
    fg: string;
  };
  card: {
    bg: string;
    fg: string;
  };
  review: {
    bg: string;
    fg: string;
  };
  viewButtons: {
    activeBg: string;
    activeFg: string;
    bg: string;
    fg: string;
  };
}

export enum ThemeTypes {
  light = 'light-theme',
  dark = 'dark-theme',
}
