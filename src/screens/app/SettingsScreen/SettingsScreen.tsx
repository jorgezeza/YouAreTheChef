import {Screen, Text} from '@components'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {AppStackParamList} from 'src/routes/AppStack'

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="extraLargeFont">Setting Screen</Text>
    </Screen>
  )
}
