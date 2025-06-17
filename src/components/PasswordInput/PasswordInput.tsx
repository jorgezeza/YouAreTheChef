import React, {useState} from 'react'
import {TextInput, TextInputProps} from '../TextInput/TextInput'
import {Icon} from '../Icon/Icon'

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
