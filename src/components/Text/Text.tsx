import React from 'react'
import {Text as RNText, TextProps as RNTextProps, TextStyle} from 'react-native'

interface TextProps extends RNTextProps {
  preset?: TextVariants
}

export function Text({
  children,
  preset = 'mediumFont',
  style,
  ...rest
}: TextProps) {
  return (
    <RNText style={[$fontSize[preset],{ fontFamily: $fontFamily.primayFont }, style]} {...rest}>
      {children}
    </RNText>
  )
}

type TextVariants = 'largeFont' | 'mediumFont' | 'smallFont'

const $fontSize: Record<TextVariants, TextStyle> = {
  largeFont: {fontSize: 24},
  mediumFont: {fontSize: 20},
  smallFont: {fontSize: 16}
}

const $fontFamily = {
  primayFont: 'Roboto-Regular'
}
