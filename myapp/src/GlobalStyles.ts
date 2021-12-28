import { createGlobalStyle } from 'styled-components';


import Background from './Assets/home/home-bg.jpg'

type Theme = any;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${({ theme }: Theme) => theme.font.primary};
  }

  body {
    padding: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    background-image: url(${Background});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 100vh;
    height: 100%;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default GlobalStyle;