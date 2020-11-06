import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ROUTENAMES from './RouteNames'
import Home from 'pages/Home'
import Destaques from 'pages/Destaques'
import Perfil from 'pages/Perfil'
import Promocoes from 'pages/Promocoes'

const AppTabs = createBottomTabNavigator()

const HomeStack = createStackNavigator()
const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name={ROUTENAMES.HOME}
      component={Home}
      options={{
        headerShown: false,
        header: undefined
      }}
    />
  </HomeStack.Navigator>
)

export type DestaqueParamList = {
  Destaques: undefined
}

const DestqueStack = createStackNavigator()
const DestqueRoutes = () => (
  <DestqueStack.Navigator>
    <DestqueStack.Screen
      name={ROUTENAMES.FEATURED}
      component={Destaques}
      options={{
        headerShown: false,
        header: undefined
      }}
    />
  </DestqueStack.Navigator>
)

const AppRoutes = () => {
  return (
    <AppTabs.Navigator initialRouteName={ROUTENAMES.HOME}>
      <AppTabs.Screen name={ROUTENAMES.HOME_STACK} component={HomeRoutes} />
      <AppTabs.Screen
        name={ROUTENAMES.FEATURED_STACK}
        component={DestqueRoutes}
      />
      <AppTabs.Screen name={ROUTENAMES.PROMOTIONS} component={Promocoes} />
      <AppTabs.Screen name={ROUTENAMES.PROFILE} component={Perfil} />
    </AppTabs.Navigator>
  )
}

export default AppRoutes
