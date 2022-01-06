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
    background-repeat: repeat;
    min-height: 100vh;
    height: 100%;
  }

  @keyframes Move {
    0%, 100% {
      transform: translateY(0rem);
    }

    50% {
      transform: translateY(3rem);
    }
  }

  @keyframes Show {
    0% {
      opacity: 0;
    }

    50% {
      opacity: .5;
    }

    100% {
      opacity: 1;
    }
  }
`

export default GlobalStyle;