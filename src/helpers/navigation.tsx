import { BackButton } from '@app/components/buttons/BackButton';
import { RootStackParamList } from '@app/navigation/types';
import { Colors } from '@app/styles/colors';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

export const screenHeader = (
  navigation: NavigationProp<RootStackParamList>,
  title?: string
): StackNavigationOptions => ({
  title: title ?? '',
  headerTitleStyle: styles.title,
  headerTitleAlign: 'center',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerLeft: ({ canGoBack }) => (canGoBack ? <BackButton onPress={navigation.goBack} /> : null),
});

const styles = StyleSheet.create({
  title: {
    color: Colors.black100,
    letterSpacing: 0.5,
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
