import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import theme from './theme'

import LandingPage from './Pages'

import GlobalStyle from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

