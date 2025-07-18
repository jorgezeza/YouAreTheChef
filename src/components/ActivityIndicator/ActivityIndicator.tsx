import React from 'react'

import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator
} from 'react-native'
import { ThemeColors } from "@theme"
import { useAppTheme } from "@hooks"

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useAppTheme()
  return <RNActivityIndicator color={colors[color]} />
}
