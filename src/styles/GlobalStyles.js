import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Quicksand, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: #F3F3F3;
    background-color: #011A30;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
  }

  /* scroll bar */
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: #011527;
  }
  ::-webkit-scrollbar-thumb {
    background: #f3f3f36e;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f3f3f3bd;
  }
  /* Selection */
  ::selection {
    background-color: #BD0C7A;
    color: #F3F3F3;
  }

  h1 {
    font-family: 'Righteous';
    font-size: 3.2em;
    margin: 0;
  }
  h2 {
    font-family: 'Righteous';
    font-size: 2.4em;
    margin: 0;
  }
  p {
    font-size: 1em;
    margin: 0;
  }
  button{
    width: 170px;
    border-radius: 20px;
    font-family: 'Quicksand';
    padding: 10px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    user-select: none;
  }
  button:active{
    transform: scale(0.95);
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }
`;

export default GlobalStyles;