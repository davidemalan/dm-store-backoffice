import 'styled-components';
import { createGlobalStyle, css } from 'styled-components';

import { colors } from '../consts';
import { Theme } from '../types/theme';

// type theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// create basic global style rules for all the app
export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // #root selector as :root pseudo element doesn't work on global styles
  body,
  #root {
    margin: 0;
    display: flex;
    justify-content: center;
    min-width: 320px;
    min-height: 100vh;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  p {
    margin-top: 0;
  }

  button {
    background-color: ${colors.transparent};
    border: none;
    cursor: pointer;
  }
`;

// export global style component
export const GlobalStyles = createGlobalStyle`
    ${globalStyles}
`;
