import React from 'react'
import {Screen} from '../../../components/Screen/Screen'
import {TextInput} from '../../../components/TextInput/TextInput'
import {Button} from '../../../components/Button/Button'
import {Icon} from '../../../components/Icon/Icon'
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput'
import {Box} from '../../../components/Box/Box'
import {Image} from 'react-native'
import {$containerPersonLogin} from '../LoginScreen/LoginScreen'

export function SignUpScreen() {
  const submitForm = () => {
    //TODO
  }
  return (
    <Screen canGoBack scrollable imageBackground="backgroundLogin">
      <Box {...$containerPersonLogin}>
        <Image source={require('../../../assests/images/personLogin.png')} />
      </Box>
      <TextInput
        label="Username"
        placeholder="Digite seu nome"
        boxProps={{mb: 's8'}}
      />
      <TextInput
        label=" e-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's8'}}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's8'}}
      />
      <PasswordInput
        RightComponent={<Icon name="lock" />}
        label="Confirmar senhaaaa"
        placeholder="Confirmar senha"
        boxProps={{mb: 's8'}}
      />

      <PasswordInput
        LeftComponent={<Icon name="eyeOn" />}
        label="Nova Senha"
        placeholder="senhaaa"
      />

      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  )
}
