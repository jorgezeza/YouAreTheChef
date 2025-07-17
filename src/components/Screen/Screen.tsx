import React from 'react'
import {ImageBackground, KeyboardAvoidingView, Platform} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Icon, Text, Box, TouchableOpacityBox} from '@components'
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer'
import {useAppSafeArea} from '@hooks'

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
  const image = imageBackgroundRegistry[imageBackground] || ''
  const Container = scrollable ? ScrollViewContainer : ViewContainer

  const navigation = useNavigation()
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground source={image} style={{flex: 1}}>
        <Container>
          <Box
            paddingBottom="s24"
            paddingHorizontal="s24"
            style={{paddingTop: top, paddingBottom: bottom}}>
            {canGoBack && (
              <TouchableOpacityBox
                onPress={navigation.goBack}
                flexDirection="row">
                <Icon name="lock" color="primary" />
                <Text preset="mediumFont" marginLeft="s8">
                  Voltar
                </Text>
              </TouchableOpacityBox>
            )}
            {children}
          </Box>
        </Container>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const imageBackgroundRegistry = {
  backgroundLogin: require('../../assests/images/backgroundLogin.png')
}

type ImageType = typeof imageBackgroundRegistry
type ImageNames = keyof ImageType
