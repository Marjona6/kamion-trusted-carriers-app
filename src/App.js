import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/organisms/Header'

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default App
