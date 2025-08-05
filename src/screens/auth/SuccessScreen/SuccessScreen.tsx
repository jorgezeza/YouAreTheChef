import React from 'react'
import {Button, Screen, Text} from '@components'
import {AuthScreenPros} from '@routes'

export function SuccessScreen({
  route,
  navigation
}: AuthScreenPros<'SuccessScreen'>) {
  const goBackToBegin = () => {
    navigation.goBack()
  }
  return (
    <Screen imageBackground="backgroundLogin">
      <Text mt="s56" preset="extraLargeFont">
        {route.params.title}
      </Text>
      <Text mt="s24" preset="mediumFont">
        {route.params.description}
      </Text>
      <Button mt="s24" onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  )
}
