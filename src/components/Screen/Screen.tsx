import React from 'react'
import {Box} from '../Box/Box'
import {useAppSafeArea} from '../../hooks/useAppSafeArea'
import {Icon} from '../Icon/Icon'
import {Text} from '../Text/Text'
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer'
import {useAppTheme} from '../../hooks/useAppTheme'

interface ScreenProps {
  children: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
  imageBackground: ImageNames
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  imageBackground
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea()
  const {colors} = useAppTheme()
  const image = imageBackgroundRegistry[imageBackground] || ''
  const Container = scrollable ? ScrollViewContainer : ViewContainer
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        source={image}
        style={{flex: 1}}>
        <Container>
          <Box
            paddingBottom="s24"
            paddingHorizontal="s24"
            style={{paddingTop: top, paddingBottom: bottom}}>
            {canGoBack && (
              <Box mb="s24" flexDirection="row">
                <Icon name="lock" color="primary" />
                <Text preset="mediumFont" marginLeft="s8">
                  Voltar
                </Text>
              </Box>
            )}
            {children}
          </Box>
        </Container>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const imageBackgroundRegistry = {
  backgroundLogin: require('../../assests/images/backgroundLogin.png'),
}

type ImageType = typeof imageBackgroundRegistry
type ImageNames = keyof ImageType