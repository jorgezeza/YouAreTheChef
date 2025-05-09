import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {Text} from './src/components/Text/Text'
import {Button} from './src/components/Button/Button'
import {ThemeProvider} from '@shopify/restyle'
import {theme} from './src/theme/theme'

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="largeFont" style={{color: 'red'}}>
          YouAreTheChef
        </Text>

        <View style={{paddingVertical: 24, paddingHorizontal: 24}}>
          <Button title="Entrar" marginBottom='s10' backgroundColor='background' />
          <Button loading title="loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
