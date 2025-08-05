import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {AppStack} from './AppStack'
import {AuthStack} from './AuthStack'

//TODO: Success Screen: icon, title, description
const authenticated = true

export function Router() {
  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
