import { createStyledBreakpointsTheme } from 'styled-breakpoints';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const STORE_ID = import.meta.env.VITE_STORE_ID;
export const PRODUCTS_PER_PAGE = import.meta.env.VITE_PRODUCTS_PER_PAGE;

// create breakpoint object and pass to theme
export const breakpointsTheme = createStyledBreakpointsTheme({
  breakpoints: {
    xs: '375px',
    sm: '576px',
    md: '850px',
    lg: '1024px',
    xl: '1440px',
    xxl: '2000px',
  },
});

export const colors = {
  // base
  transparent: 'transparent',
  white: '#fff',
  black: '#000',

  // gray facets
  gray100: '#f1f1f1',
  gray200: '#ededed',
  gray300: '#c4c4c4',
  gray400: '#b3b8bc',
  gray500: '#acacac',
  gray600: '#494d55',
  gray700: '#272727',

  // errors and delete
  red: '#cc2e2e',
  darkRed: '#b62a2a',

  // add and confirm
  green: '#2ecc71',
  darkGreen: '#25a85c',

  // input focus
  lightBlue: '#80bdff',
};
