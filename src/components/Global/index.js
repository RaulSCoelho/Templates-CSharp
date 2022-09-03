import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #addButton:hover{
    color: rgb(0, 202, 27) !important;
  }

  #updateButton:hover{
    color: rgb(0, 89, 255) !important;
  }

  #deleteButton:hover{
    color: rgb(235, 0, 0) !important;
  }

  #downloadButton:hover{
    color: rgb(130, 30, 140) !important;
  }
`;
