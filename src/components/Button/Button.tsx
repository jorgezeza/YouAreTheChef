import React from 'react'
import {ActivityIndicator} from 'react-native'
import {Text} from '../Text/Text'
import {Box} from '../Box/Box'

interface ButtonProps {
  title: string
  loading?: boolean
}

export function Button({title, loading}: ButtonProps) {
  return (
    <Box
      backgroundColor="secondary"
      paddingHorizontal="s20"
      height={52}
      alignItems="center"
      justifyContent="center"
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="largeFont" style={{color: 'white'}}>
          {title}
        </Text>
      )}
    </Box>
  )
}
