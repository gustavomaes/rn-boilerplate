import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import Navigation from 'routes/Navigation'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
}

export default App
