import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {Box, BoxProps} from '../../../components/Box/Box'
import {TextInput} from '../../../components/TextInput/TextInput'
import {Icon} from '../../../components/Icon/Icon'
import {Button} from '../../../components/Button/Button'
import {Text} from '../../../components/Text/Text'
import {Screen} from '../../../components/Screen/Screen'
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput'
import {Alert, Image} from 'react-native'
import {RootStackParamList} from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

type LoginFormType = {
  email: string
  password: string
}

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
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

  const submitForm = ({email, password}: LoginFormType) =>
    Alert.alert(`Email: ${email}, Senha: ${password}`)
  return (
    <Screen imageBackground="backgroundLogin" scrollable>
      <Box {...$containerPersonLogin}>
        <Image source={require('../../../assests/images/personLogin.png')} />
      </Box>
      <Box>
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'E-mail obrigatório',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'E-mail inválido'
            }
          }}
          render={({field, fieldState}) => (
            <TextInput
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
              label="E-mail"
              placeholder="Digite seu e-mail"
              LeftComponent={<Icon color="redPrimary" name="email" />}
              boxProps={{mb: 's20'}}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Senha obrigatória',
            minLength: {
              value: 3,
              message: 'Senha deve ter no mínimo 3 caracteres'
            }
          }}
          render={({field, fieldState}) => (
            <PasswordInput
              errorMessage={fieldState.error?.message}
              label="Senha"
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Digite sua senha"
              LeftComponent={<Icon name="lock" />}
              RightComponent={<Icon name="eyeOff" />}
              boxProps={{mb: 's20'}}
            />
          )}
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
