import React, { ReactNode, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@app/styles/colors';
import { LockClosedIcon } from '../icons/LockClosed';
import { EyeSlashIcon } from '../icons/EyeSlash';
import { EyeIcon } from '../icons/Eye';

export interface BaseFieldProps {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  outerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  isPassword?: boolean;
  isSecure?: boolean;
  setIsSecure?: (isSecure: boolean) => void;
  children?: ReactNode;
  bottomChildren?: ReactNode;
}

export const BaseField = (props: BaseFieldProps) => {
  const { error, children, bottomChildren, wrapperStyle, outerStyle } = props;

  const renderLabel = useCallback((props: BaseFieldProps) => {
    const { label, error, disabled, labelStyle } = props;

    return (
      <View style={[styles.label, labelStyle]}>
        <Text
          style={[
            styles.labelText,
            error && styles.labelTextError,
            disabled && styles.labelTextDisabled,
          ]}
        >
          {label}
        </Text>
      </View>
    );
  }, []);

  const renderChildren = useCallback((children?: ReactNode) => {
    return children ?? null;
  }, []);

  const renderDisabled = useCallback((props: BaseFieldProps) => {
    const { disabled } = props;

    if (disabled) {
      return <LockClosedIcon color={Colors.grey60} />;
    }

    return null;
  }, []);

  const renderSecure = useCallback((props: BaseFieldProps) => {
    const { isPassword, isSecure, setIsSecure, disabled } = props;
    if (disabled) return null;

    if (isPassword && setIsSecure) {
      return isSecure ? (
        <TouchableOpacity onPress={() => setIsSecure(false)}>
          <EyeSlashIcon />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setIsSecure(true)}>
          <EyeIcon />
        </TouchableOpacity>
      );
    }
  }, []);

  return (
    <View style={wrapperStyle}>
      <View style={[styles.outer, error && styles.outerError, outerStyle]}>
        <View style={styles.inner}>
          {renderChildren(children)}
          {renderSecure(props)}
          {renderDisabled(props)}
          {props.label !== undefined && renderLabel(props)}
        </View>
      </View>
      {renderChildren(bottomChildren)}
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    borderColor: Colors.grey40,
    borderRadius: 6,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 12,
    marginTop: 10,
    width: '100%',
    minHeight: 48,
  },
  outerError: {
    borderColor: Colors.red50,
  },
  inner: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
  },
  label: {
    backgroundColor: Colors.white,
    height: 20,
    left: 0,
    paddingLeft: 4,
    paddingRight: 4,
    position: 'absolute',
    top: 0,
    transform: [{ translateY: -10 }],
  },
  labelText: {
    color: Colors.black85,
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: 'left',
  },
  labelTextError: {
    color: Colors.red50,
  },
  labelTextDisabled: {
    color: Colors.grey50,
  },
});
