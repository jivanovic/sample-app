import { Colors } from '@app/styles/colors';
import { RootScreenProp } from '../../navigation/types';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { setIsAuthenticated } from '@app/redux/auth/authSlice';
import { StorageKeys } from '@app/constants/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { Button } from '@app/components/buttons/Button';

type Props = RootScreenProp<'Protected'>;

const ProtectedScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleButtonPress = async () => {
    try {
      await AsyncStorage.removeItem(StorageKeys.Token);
      dispatch(setIsAuthenticated(false));
    } catch {
      Alert.alert(t('general.error.title'), t('general.error.text'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('protectedScreen.text')}</Text>
      <Button text={t('protectedScreen.button')} onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 14,
    letterSpacing: 0.1,
    color: Colors.black100,
    marginBottom: 16,
  },
});

export default ProtectedScreen;
