import React, {ReactElement, useRef} from 'react'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle
} from 'react-native'

import {Box, BoxProps, $fontFamily, Text} from '@components'
import {useAppTheme} from '@hooks'

export interface TextInputProps extends RNTextInputProps {
  label?: string
  errorMessage?: string
  LeftComponent?: ReactElement
  RightComponent?: ReactElement
  boxProps?: BoxProps
}

export function TextInput({
  label,
  errorMessage,
  LeftComponent,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme()
  const inputRef = useRef<RNTextInput>(null)
  function focusInput() {
    inputRef.current?.focus()
  }

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 1 : 0,
    borderColor: errorMessage ? 'redSecondary' : 'none',
    backgroundColor: 'backgroundPrimaryTransparente',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: errorMessage ? 'redPrimary' : 'whiteSecondaryTranparent'
  }

  const $textInputStyle: TextStyle = {
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,
    fontFamily: $fontFamily.primaryFont,
    color: colors.whiteSecondary,
    height: 20
  }
  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="mediumFont">{label}</Text>
        <Box {...$textInputContainer}>
          {LeftComponent && (
            <Box justifyContent="center" ml="s12" mr="s8">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.whiteSecondary}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s8" mr="s8">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="smallFont" color="redPrimary">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  )
}
