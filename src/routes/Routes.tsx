import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {AppStack} from './AppStack'
import {AuthStack} from './AuthStack'

export type RootStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
  SuccessScreen: {
    title: string
    description: string
  }
  ForgotPasswordScreen: undefined
  //TODO: Success Screen: icon, title, description
}

const authenticated = false

export function Router() {
  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
