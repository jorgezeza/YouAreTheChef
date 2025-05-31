/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react'
import {Text} from '../Text/Text'
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box'
import {buttonPresets} from './buttonPreset'
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator'

export type ButtonPreset = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  loading?: boolean
  preset?: ButtonPreset
  disabled?: boolean
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...TouchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default']
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={52}
      alignItems="center"
      justifyContent="center"
      {...buttonPreset.container}
      {...TouchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color="primaryContrast" />
      ) : (
        <Text preset="largeFont" color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  )
}
