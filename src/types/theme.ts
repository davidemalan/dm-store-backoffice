export interface Theme {
  name: string;
  primary: string;
  switch: {
    bg: string;
    fg: string;
  };
  button: {
    bg: string;
    fg: string;
  };
}

export enum ThemeTypes {
  light = 'light-theme',
  dark = 'dark-theme',
}
