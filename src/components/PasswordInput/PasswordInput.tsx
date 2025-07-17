import React, {useState} from 'react'
import {TextInput, TextInputProps, Icon} from '@components'

export function PasswordInput(props: TextInputProps) {
  const [isSecureTextEntry, setSecureTextEntry] = useState(true)

  function toggleSecureTextEntry() {
    setSecureTextEntry(prev => !prev)
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  )
}
