import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #723022;
    color: #FAFFEB;
    -webkit-text-size-adjust: none;
    font-family: 'Poppins', sans-serif;
  }
`;
