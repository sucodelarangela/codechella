import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--raleway);
    color: ${({ theme }) => theme.textColor};
    transition: 0.3s;
    list-style: none;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.primaryBlue} ${({ theme }) => theme.lightBlue};
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

  body::-webkit-scrollbar {
    background: ${({ theme }) => theme.lightBlue};
    width: 8px;
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primaryBlue};
  }

  a {
    color: #FFF;
    text-decoration: none;
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

  @media screen and (min-width: 768px) {
    .container {
      display: block;
      margin: 0 auto;
      max-width: 1280px;
      padding: 2rem 3.75rem;
    }
  }
  @media screen and (min-width: 1280px) {
    .container {
      padding: 2rem 0;
    }
  }
`;
