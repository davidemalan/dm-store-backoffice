import { createGlobalStyle, css } from 'styled-components';

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

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
`;

// export global style component
export const GlobalStyles = createGlobalStyle`
    ${globalStyles}
`;
