import {Screen, Text} from '@components'
import {AppScreenPros} from '@routes'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: AppScreenPros<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="extraLargeFont">Setting Screen</Text>
    </Screen>
  )
}
