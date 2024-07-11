import React, { Ref, useEffect } from 'react';
import { useController, UseControllerProps, FieldValues } from 'react-hook-form';
import { TextInput } from 'react-native';
import { TextField, TextFieldProps } from '../textField/TextField';

type Props<T extends FieldValues> = UseControllerProps<T> &
  TextFieldProps & { myRef?: Ref<TextInput>; depValue?: number | string | object };

export const ControlledTextField = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, depValue, ...rest } = props;

  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name });

  useEffect(() => {
    onChange(value);
  }, [depValue]);

  return (
    <TextField
      {...rest}
      onChangeText={onChange}
      value={value as string}
      error={!!fieldState.error}
    />
  );
};
