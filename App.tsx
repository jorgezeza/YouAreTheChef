/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {SafeAreaView, TextInput, View} from 'react-native'
import {ThemeProvider} from '@shopify/restyle'
import {theme} from './src/theme/theme'
import {Box} from './src/components/Box/Box'
import {Button} from './src/components/Button/Button'
import { Text } from './src/components/Text/Text'

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingVertical: 24, paddingHorizontal: 24}}>
          <Box mb="s20">
            <TextInput style={{borderWidth: 1, height: 50}} />
          </Box>
          <Box mb="s20">
            <TextInput style={{borderWidth: 1, height: 50}} />
          </Box>

          <Box>
            <Button title="Entrar" />
            <Text color="primaryContrast" mb="s8" mt="s8" >Esqueci minha senha</Text>
            <Button preset="secondary" title="Crie sua conta" />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
