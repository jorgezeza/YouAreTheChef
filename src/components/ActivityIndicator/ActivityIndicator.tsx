import React from 'react'

import { ActivityIndicatorProps, ActivityIndicator as RNActivityIndicator } from 'react-native'
import { Theme, themeColors } from '../../theme/theme'
import { useTheme } from '@shopify/restyle'

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: themeColors
}

export function ActivityIndicator({ color }: Props) {
  const {colors} = useTheme<Theme>()
  return <RNActivityIndicator color={colors[color]} />
}
