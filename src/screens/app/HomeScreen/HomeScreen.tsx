import {Button, Screen, Text} from '@components'
import {AppScreenPros} from '@routes'
import React from 'react'

export function HomeScreen({navigation}: AppScreenPros<'HomeScreen'>) {
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
