import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--raleway);
    color: ${({ theme }) => theme.textColor};
    transition: 0.3s;
  }
  
  :root {
    /* Fonts */
    --calistoga: 'Calistoga', cursive;
    --raleway: 'Raleway', sans-serif;
  }

  body {
    background-image: ${({ theme }) => theme.gradient};
    background-repeat: no-repeat;
  }

  a, button {
    cursor: pointer;
  }

  p {
    font-size: 1.25rem;
  }

  .container {
    padding: 1.5rem;
  }
`;
