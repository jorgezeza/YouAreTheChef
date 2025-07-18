import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {
  LoginScreen,
  ForgotPasswordScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens'

export type RootStackParamList = {
  LoginScreen: undefined,
  SignUpScreen: undefined,
  SuccessScreen: {
    title: string,
    description: string
  },
  ForgotPasswordScreen: undefined
  //TODO: Success Screen: icon, title, description
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
