/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {Image, ImageBackground, SafeAreaView, View} from 'react-native'
import {ThemeProvider} from '@shopify/restyle'
import {theme} from './src/theme/theme'
import {Box, BoxProps} from './src/components/Box/Box'
import {Button} from './src/components/Button/Button'
import {Text} from './src/components/Text/Text'
import {TextInput} from './src/components/TextInput/TextInput'
import {Icon} from './src/components/Icon/Icon'

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('./src/assests/images/backgroundLogin.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              paddingVertical: 24,
              paddingHorizontal: 24
            }}>
            <Box {...$containerPersonLogin}>
              <Image source={require('./src/assests/images/personLogin.png')} />
            </Box>
            <Box>
              <Box>
                <TextInput
                  errorMessage="Mensagem de Error"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  LeftComponent={<Icon color="redPrimary" name="email"/>}
                  boxProps={{mb: 's20'}}
                />
              </Box>
              <Box>
                <TextInput
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
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ThemeProvider>
  )
}

const $containerPersonLogin: BoxProps = {
  alignItems: 'center',
  mt: 's56',
  mb: 's56'
}

export default App
