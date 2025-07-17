import React from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {Button, Screen, Text} from '@components'
import {RootStackParamList} from '@routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({route, navigation}: ScreenProps) {
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
