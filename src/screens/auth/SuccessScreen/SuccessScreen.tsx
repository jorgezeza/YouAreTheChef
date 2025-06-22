import React from 'react'
import {Screen} from '../../../components/Screen/Screen'
import {Text} from '../../../components/Text/Text'
import {Button} from '../../../components/Button/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({route}: ScreenProps) {
  const goBackToBegin = () => {
    //TODO: navegar para a tela de login
  }
  return (
    <Screen imageBackground="backgroundLogin">
      <Text mt='s56' preset="largeFont">{route.params.title}</Text>
      <Text mt='s24' preset="mediumFont">{route.params.description}</Text>
      <Button mt='s56' onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  )
}
