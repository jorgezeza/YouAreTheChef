import React from 'react'
import {Screen} from '../../../components/Screen/Screen'
import {Text} from '../../../components/Text/Text'
import {TextInput} from '../../../components/TextInput/TextInput'
import {Icon} from '../../../components/Icon/Icon'
import {Button} from '../../../components/Button/Button'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const submitForm = () => {
    navigation.navigate('SuccessScreen', {
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha'
    })
  }
  return (
    <Screen imageBackground="backgroundLogin" canGoBack>
      <Text preset="extraLargeFont" mb="s24">
        Esqueci minha senha
      </Text>
      <Text preset="mediumFont" mb="s24">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        errorMessage="Mensagem de Error"
        label="E-mail"
        placeholder="Digite seu e-mail"
        LeftComponent={<Icon color="redPrimary" name="email" />}
        boxProps={{mb: 's20'}}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  )
}
