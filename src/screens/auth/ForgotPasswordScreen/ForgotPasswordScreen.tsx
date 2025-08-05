import React from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button, FormTextInput, Text, Screen, Icon} from '@components'
import {AuthScreenPros} from '@routes'
import {useResetNavigationSuccess} from '@hooks'
import {
  forgotPasswordSchema,
  ForgotPasswordSchema
} from './forgotPasswordSchema'

export function ForgotPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation
}: AuthScreenPros<'ForgotPasswordScreen'>) {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    },
    mode: 'onChange'
  })
  const {reset} = useResetNavigationSuccess()
  const submitForm = () => {
    reset({
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
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        LeftComponent={<Icon color="redPrimary" name="email" />}
        boxProps={{mb: 's20'}}
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  )
}
