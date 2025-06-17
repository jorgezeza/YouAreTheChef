import React from 'react'
import {Box, BoxProps} from '../../../components/Box/Box'
import {TextInput} from '../../../components/TextInput/TextInput'
import {Icon} from '../../../components/Icon/Icon'
import {Button} from '../../../components/Button/Button'
import {Text} from '../../../components/Text/Text'
import {Screen} from '../../../components/Screen/Screen'
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput'
import {Image} from 'react-native'

export function LoginScreen() {
  return (
    <Screen imageBackground="backgroundLogin">
      <Box {...$containerPersonLogin}>
        <Image source={require('../../../assests/images/personLogin.png')} />
      </Box>
      <Box>
        <Box>
          <TextInput
            errorMessage="Mensagem de Error"
            label="E-mail"
            placeholder="Digite seu e-mail"
            LeftComponent={<Icon color="redPrimary" name="email" />}
            boxProps={{mb: 's20'}}
          />
        </Box>
        <Box>
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            LeftComponent={<Icon name="lock" />}
            RightComponent={<Icon name="eyeOff" />}
            boxProps={{mb: 's20'}}
          />
        </Box>
      </Box>

      <Box>
        <Button title="Entrar" />
        <Text color="primaryContrast" mb="s8" mt="s8" textAlign="center">
          Esqueci minha senha
        </Text>
        <Button preset="secondary" title="Crie sua conta" />
      </Box>
    </Screen>
  )
}

export const $containerPersonLogin: BoxProps = {
  alignItems: 'center',
  mt: 's56',
  mb: 's56'
}
