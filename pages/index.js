import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../src/components/organisms/Header'
import theme from '../src/theme'
import H2 from '../src/components/atoms/texts/H2'

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <H2>Welcome to the Kamion Trusted Carriers App</H2>
    </ThemeProvider>
  )
}

export default Home
