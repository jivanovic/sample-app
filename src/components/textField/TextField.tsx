import React, { Ref, useMemo, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { BaseField, BaseFieldProps } from './BaseField';
import { TextFieldError } from './TextFieldError';
import { Colors } from '@app/styles/colors';

export type TextFieldProps = BaseFieldProps &
  TextInputProps & {
    errorMessage?: string;
    errorMessageSignleLine?: boolean;
    isPassword?: boolean;
    myRef?: Ref<TextInput>;
    maxLength?: number;
  };

export const TextField = (props: TextFieldProps) => {
  const {
    label,
    error,
    errorMessage,
    style,
    disabled,
    labelStyle,
    children,
    outerStyle,
    wrapperStyle,
    value,
    isPassword = false,
    myRef,
    ...rest
  } = props;

  const [isSecure, setIsSecure] = useState<boolean>(isPassword);

  const color = useMemo(() => (disabled ? Colors.grey50 : Colors.black100), [disabled]);

  return (
    <BaseField
      label={label}
      error={error}
      disabled={disabled}
      labelStyle={labelStyle}
      outerStyle={outerStyle}
      wrapperStyle={wrapperStyle}
      isPassword={isPassword}
      isSecure={isSecure}
      setIsSecure={setIsSecure}
      bottomChildren={<TextFieldError errorMessage={errorMessage} />}
    >
      <TextInput
        style={[styles.textInput, { color }, style]}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        value={value}
        secureTextEntry={isSecure}
        ref={myRef}
        placeholderTextColor={Colors.grey40}
        {...rest}
      />
    </BaseField>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 0,
    borderWidth: 0,
    color: Colors.black100,
    flex: 1,
    fontSize: 16,
    paddingLeft: 4,
    paddingRight: 4,
    width: '100%',
    minHeight: 44,
  },
});
