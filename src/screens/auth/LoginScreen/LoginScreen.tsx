import React from 'react'
import {useForm} from 'react-hook-form'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {Box, BoxProps} from '../../../components/Box/Box'
import {Icon} from '../../../components/Icon/Icon'
import {Button} from '../../../components/Button/Button'
import {Text} from '../../../components/Text/Text'
import {Screen} from '../../../components/Screen/Screen'
import {Alert, Image} from 'react-native'
import {RootStackParamList} from '../../../routes/Routes'
import {zodResolver} from '@hookform/resolvers/zod'
import {LoginSchema, loginSchema} from './loginSchema'
import {FormTextInput} from '../../../components/Form/FormTextInput'
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen')
  }

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen')
  }

  const submitForm = ({email, password}: LoginSchema) =>
    Alert.alert(`Email: ${email}, Senha: ${password}`)
  return (
    <Screen imageBackground="backgroundLogin" scrollable>
      <Box {...$containerPersonLogin}>
        <Image source={require('../../../assests/images/personLogin.png')} />
      </Box>
      <Box>
        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          LeftComponent={<Icon color="redPrimary" name="email" />}
          boxProps={{mb: 's20'}}
        />

        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          LeftComponent={<Icon name="lock" />}
          RightComponent={<Icon name="eyeOff" />}
          boxProps={{mb: 's20'}}
        />
      </Box>

      <Box>
        <Button title="Entrar" onPress={handleSubmit(submitForm)} />

        <Text
          onPress={navigateToForgotPasswordScreen}
          color="primaryContrast"
          mb="s8"
          mt="s8"
          textAlign="center">
          Esqueci minha senha
        </Text>

        <Button
        disabled={!formState.isValid}
          onPress={navigateToSignUpScreen}
          preset="secondary"
          title="Crie sua conta"
        />
      </Box>
    </Screen>
  )
}

const $containerPersonLogin: BoxProps = {
  alignItems: 'center',
  mt: 's56',
  mb: 's56'
}
