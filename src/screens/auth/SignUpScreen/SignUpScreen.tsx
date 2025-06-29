import React from 'react'
import {Screen} from '../../../components/Screen/Screen'
import {TextInput} from '../../../components/TextInput/TextInput'
import {Button} from '../../../components/Button/Button'
import {Icon} from '../../../components/Icon/Icon'
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput'
import {Box, BoxProps} from '../../../components/Box/Box'
import {Image} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../../routes/Routes'
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess()
  const submitForm = () => {
    reset({
      title: 'Sua conta foi criada com sucesso !',
      description: 'Agora é só fazer login no app'
    })
  }
  return (
    <Screen canGoBack scrollable imageBackground="backgroundLogin">
      <Box {...$containerPersonLogin}>
        <Image source={require('../../../assests/images/personLogin.png')} />
      </Box>
      <TextInput
        label="Username"
        placeholder="Digite seu nome"
        LeftComponent={<Icon name="user" />}
        boxProps={{mb: 's8'}}
      />
      <TextInput
        label=" e-mail"
        placeholder="Digite seu e-mail"
        LeftComponent={<Icon name="email" />}
        boxProps={{mb: 's8'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        LeftComponent={<Icon name="lock" />}
        boxProps={{mb: 's8'}}
      />
      <PasswordInput
        label="Confirmar senha"
        placeholder="Confirmar senha"
        LeftComponent={<Icon name="lock" />}
        boxProps={{mb: 's8'}}
      />

      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  )
}

export const $containerPersonLogin: BoxProps = {
  alignItems: 'center',
  mt: 's10',
  mb: 's56'
}
