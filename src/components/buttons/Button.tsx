import { Colors } from '@app/styles/colors';
import React, { useCallback } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextStyle,
  ActivityIndicator,
} from 'react-native';

const BUTTON_HEIGHT = 44;

interface Props extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
  textStyle?: TextStyle;
}

export const Button = (props: Props) => {
  const { style, onPress, ...res } = props;

  const renderChildren = useCallback((props: Props) => {
    const { text, textStyle, loading } = props;

    if (loading) return <ActivityIndicator size="small" color={Colors.white} />;

    return <Text style={[styles.text, textStyle]}>{text}</Text>;
  }, []);

  return (
    <TouchableOpacity
      style={[styles.container, style, res.disabled && { backgroundColor: Colors.grey40 }]}
      onPress={onPress}
      {...res}
    >
      {renderChildren(props)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT,
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    maxWidth: 500,
    backgroundColor: Colors.green100,
    width: '100%',
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: Colors.white,
    fontWeight: 500,
  },
});
