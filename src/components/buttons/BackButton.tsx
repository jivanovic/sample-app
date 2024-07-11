import React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '@app/styles/colors';
import { ArrowLeftIcon } from '../icons/ArrowLeft';

interface Props {
  onPress?: () => void;
  iconColor?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const BackButton = ({ onPress, disabled, iconColor = Colors.black100, style }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress && onPress}
      disabled={disabled}
    >
      <ArrowLeftIcon color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
