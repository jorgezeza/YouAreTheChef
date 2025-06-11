import React from 'react'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Button } from '../../../components/Button/Button'

export function SignUpScreen () {
  const submitForm = () => {
    //TODO
  }
  return (
    <Screen canGoBack scrollable >
      <TextInput label='Username' placeholder='Digite seu nome' boxProps={{mb:'s8'}} />
      <TextInput label=' e-mail' placeholder='Digite seu e-mail' boxProps={{mb:'s8'}} />
      <TextInput label='Senha' placeholder='Digite sua senha' boxProps={{mb:'s8'}} />
      <TextInput label='Confirmar senha' placeholder='Confirmar senha' boxProps={{mb:'s8'}} />

    <Button onPress={submitForm} title='Criar uma conta' /> 
    </Screen>
  )
}