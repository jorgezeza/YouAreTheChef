import React from 'react'
import {Image} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {
  FormTextInput,
  FormPasswordInput,
  Screen,
  Button,
  Box,
  BoxProps,
  Icon
} from '@components'
import {signUpSchema, SignUpSchema} from './signUpSchema'
import {useResetNavigationSuccess} from '@hooks'
import {RootStackParamList} from '@routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess()
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange'
  })
  const submitForm = (formValues: SignUpSchema) => {
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
        label="Username"
        placeholder="Digite seu nome"
        LeftComponent={<Icon name="user" />}
        boxProps={{mb: 's8'}}
      />
      <FormTextInput
        control={control}
        name="email"
        label=" e-mail"
        placeholder="Digite seu e-mail"
        LeftComponent={<Icon name="email" />}
        boxProps={{mb: 's8'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's8'}}
        LeftComponent={<Icon name="lock" />}
      />

      <FormPasswordInput
        control={control}
        name="confirmPassword"
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
