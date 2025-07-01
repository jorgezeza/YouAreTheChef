import React from 'react'
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form'
import {PasswordInput} from '../PasswordInput/PasswordInput'
import { TextInputProps } from '../TextInput/TextInput'

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  )
}
