import { Colors } from '@app/styles/colors';
import { RootScreenProp } from '../../navigation/types';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from '@app/constants/storage';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '@app/redux/auth/authSlice';

type Props = RootScreenProp<'Routing'>;

const RoutingScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleButtonPress = async () => {
    try {
      // Here we would invoke an API to authenticate and receive an access token
      await AsyncStorage.setItem(StorageKeys.Token, 'fake-token');
      dispatch(setIsAuthenticated(true));
    } catch {
      Alert.alert(t('general.error.title'), t('general.error.text'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('routingScreen.text')}</Text>
      <Button text={t('routingScreen.button')} onPress={handleButtonPress} />
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
    marginBottom: 24,
  },
});

export default RoutingScreen;
