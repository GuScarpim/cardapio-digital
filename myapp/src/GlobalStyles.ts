import { createGlobalStyle } from 'styled-components';

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