import { Colors } from '@app/styles/colors';
import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { WarningIcon } from '../icons/Warning';

export interface TextFieldErrorProps {
  errorMessage?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const TEXT_HEIGHT = 16;

export const TextFieldError = ({ errorMessage, style, textStyle }: TextFieldErrorProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(errorMessage ? TEXT_HEIGHT : 0, { duration: 300 }),
    opacity: withTiming(errorMessage ? 1 : 0, { duration: 300 }),
  }));

  const renderContent = () => (
    <>
      <View style={styles.icon}>
        <WarningIcon height={12} width={12} color={Colors.red50} />
      </View>
      <Text style={[styles.text, textStyle]}>{errorMessage}</Text>
    </>
  );

  return (
    <Animated.View style={[styles.container, animatedStyle, style]}>
      {renderContent()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 4,
  },
  text: {
    color: Colors.red50,
    letterSpacing: 0.15,
    lineHeight: TEXT_HEIGHT,
    fontSize: 12,
    marginLeft: 5,
    flex: 1,
  },
  icon: {
    marginTop: 2,
  },
});
