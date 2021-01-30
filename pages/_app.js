import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme'
import { wrapper } from '../store/reducers/user'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default wrapper.withRedux(MyApp)
