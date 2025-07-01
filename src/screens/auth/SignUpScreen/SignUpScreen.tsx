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
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput'
import {useForm} from 'react-hook-form'
import {FormTextInput} from '../../../components/Form/FormTextInput'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

type SignUpFormType = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess()
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange'
  })
  const submitForm = (formValues: SignUpFormType) => {
    return console.log(formValues)
    // reset({
    //   title: 'Sua conta foi criada com sucesso !',
    //   description: 'Agora é só fazer login no app'
    // })
  }
  return (
    <Screen canGoBack scrollable imageBackground="backgroundLogin">
      <Box {...$containerPersonLogin}>
        <Image source={require('../../../assests/images/personLogin.png')} />
      </Box>
      <FormTextInput
        control={control}
        name="username"
        rules={{required: 'Username obrigatório'}}
        label="Username"
        placeholder="Digite seu nome"
        LeftComponent={<Icon name="user" />}
        boxProps={{mb: 's8'}}
      />
      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido'
          }
        }}
        label=" e-mail"
        placeholder="Digite seu e-mail"
        LeftComponent={<Icon name="email" />}
        boxProps={{mb: 's8'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 3,
            message: 'Senha deve ter no mínimo 3 caracteres'
          }
        }}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's8'}}
        LeftComponent={<Icon name="lock" />}
      />

      <FormPasswordInput
        control={control}
        name="confirmPassword"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 3,
            message: 'Senha deve ter no mínimo 3 caracteres'
          }
        }}
        label="Confirmar senha"
        placeholder="Confirme sua senha"
        LeftComponent={<Icon name="lock" />}
        boxProps={{mb: 's8'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  )
}

export const $containerPersonLogin: BoxProps = {
  alignItems: 'center',
  mt: 's10',
  mb: 's56'
}
