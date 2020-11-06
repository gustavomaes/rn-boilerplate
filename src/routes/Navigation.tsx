import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppRoutes from './app.routes'
import Alert from 'pages/Alert'

export type AppParamList = {
  Alert: {
    title: string
    description: string
  }
  Home: undefined
  HomeStack: undefined
  Featured: undefined
  FeaturedStack: undefined
  Promotions: undefined
  Profile: undefined
  App: undefined
}

const RootStack = createStackNavigator<AppParamList>()
const RootStackScreen = () => (
  <RootStack.Navigator
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
    mode="modal"
  >
    <RootStack.Screen name="App" component={AppRoutes} />

    <RootStack.Screen
      name="Alert"
      component={Alert}
      options={{
        animationEnabled: true,
        cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp'
              })
            }
          }
        }
      }}
    />
  </RootStack.Navigator>
)

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}

export default Navigation
