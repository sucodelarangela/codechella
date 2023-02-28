import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }  
  
  :root {
    /* Colors */
    --black: #141414;
    --cian: #6bd1ff;
    --highlight-btn: rgba(80, 129, 251, 0.08);
    --highlight-hover: rgba(80, 129, 251, 0.16);
    --highlight-active: rgba(80, 129, 251, 0.24);
    --light-blue: #5081fb;
    --dark-blue: #051d3b;
    --overlay: rgba(0, 0, 0, .5);
    --input: rgba(255, 255, 255, .16);
    --input-hover: rgba(255, 255, 255, .24);
    --white: rgba(255, 255, 255, 1);
    --dark-red: #721c24;
    --light-red: #f8d7da;
    --red-border: #f5c6cb;
    --laranja: #ffc46b;
    --linha: rgba(255, 255, 255, 1);
    --menu-mobile: #2d415b;
    --rosa: #ff6bcd;
    --roxo: #5f75e2;
    --user-hover: rgba(255, 255, 255, 0.08);
    --verde: #9aff6b;

    /* Fonts */
    --calistoga: 'Calistoga', cursive;
    --raleway: 'Raleway', sans-serif;
  }  
`;
