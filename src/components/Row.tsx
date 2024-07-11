import { Colors } from '@app/styles/colors';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Row = ({ text, onPress, leftIcon, rightIcon, style, textStyle }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {leftIcon}
      <Text style={[styles.text, !leftIcon && { marginLeft: 0 }, textStyle]} numberOfLines={1}>
        {text}
      </Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.grey50,
    height: 44,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    letterSpacing: 0.3,
    color: Colors.black100,
    marginRight: 16,
    marginLeft: 10,
  },
});
