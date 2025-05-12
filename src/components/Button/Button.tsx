import React from 'react'
import {ActivityIndicator} from 'react-native'
import {Text} from '../Text/Text'
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box'

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  loading?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-shadow
export function Button({title, loading, ...TouchableOpacityBoxProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="redTertiary"
      paddingHorizontal="s20"
      height={52}
      alignItems="center"
      justifyContent="center"
      {...TouchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="largeFont" color="backgroundContrast" >
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  )
}
