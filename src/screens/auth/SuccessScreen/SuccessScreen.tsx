import React from 'react'
import {Screen} from '../../../components/Screen/Screen'
import {Text} from '../../../components/Text/Text'
import {Button} from '../../../components/Button/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({route, navigation}: ScreenProps) {
  const goBackToBegin = () => {
    navigation.goBack()
  }
  return (
    <Screen imageBackground="backgroundLogin">
      <Text mt='s56' preset="extraLargeFont">{route.params.title}</Text>
      <Text mt='s24' preset="mediumFont">{route.params.description}</Text>
      <Button mt='s24' onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  )
}
