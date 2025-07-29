import {Button, Screen, Text} from '@components'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {AppStackParamList} from 'src/routes/AppStack'

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>
export function HomeScreen({navigation}: ScreenProps) {
  return (
    <Screen>
      <Text preset="extraLargeFont">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  )
}
