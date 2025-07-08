import React from 'react'
import {Screen} from '../../../components/Screen/Screen'
import {Text} from '../../../components/Text/Text'
import {Icon} from '../../../components/Icon/Icon'
import {Button} from '../../../components/Button/Button'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../../routes/Routes'
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess'
import {useForm} from 'react-hook-form'
import {
  forgotPasswordSchema,
  ForgotPasswordSchema
} from './forgotPasswordSchema'
import {FormTextInput} from '../../../components/Form/FormTextInput'
import {zodResolver} from '@hookform/resolvers/zod'

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>

export function ForgotPasswordScreen({navigation}: ScreenProps) {
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
