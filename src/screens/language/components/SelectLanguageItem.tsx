import { Colors } from '@app/styles/colors';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CheckCircleIcon } from '../../../components/icons/CheckCircle';

interface Props {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

export const SelectLanguageItem = ({ text, isSelected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>{text}</Text>
      {isSelected && <CheckCircleIcon width={20} height={20} color={Colors.green100} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.grey30,
    marginBottom: 16,
  },
  selectedContainer: {
    borderColor: Colors.green100,
  },
  text: {
    fontSize: 24,
    letterSpacing: 0.5,
    color: Colors.grey50,
    flex: 1,
  },
  selectedText: {
    color: Colors.green100,
    borderColor: Colors.green100,
  },
});
