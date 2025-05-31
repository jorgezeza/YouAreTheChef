import React from 'react'
import {TextStyle} from 'react-native'
import {createText} from '@shopify/restyle'
import {Theme} from '../../theme/theme'

const SRText = createText<Theme>()
type SRTextProps = React.ComponentProps<typeof SRText>

interface TextProps extends SRTextProps {
  preset?: TextVariants
}

export function Text({
  children,
  preset = 'mediumFont',
  style,
  ...sRTextProps
}: TextProps) {
  return (
    <SRText
      color="primaryContrast"
      style={[$fontSize[preset], {fontFamily: $fontFamily.primaryFont}, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  )
}

type TextVariants = 'largeFont' | 'mediumFont' | 'smallFont'

export const $fontSize: Record<TextVariants, TextStyle> = {
  largeFont: {fontSize: 24},
  mediumFont: {fontSize: 20},
  smallFont: {fontSize: 16}
}

export const $fontFamily = {
  primaryFont: 'Roboto-Regular'
}
