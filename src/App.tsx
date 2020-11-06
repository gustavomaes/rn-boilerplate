import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import Navigation from 'routes/Navigation'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
}

export default App
