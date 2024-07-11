import { Colors } from '@app/styles/colors';
import { RootScreenProp } from '../../navigation/types';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { LANGUAGES } from '@app/constants/language';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from '@app/constants/storage';
import { SelectLanguageItem } from './components/SelectLanguageItem';

type Props = RootScreenProp<'Language'>;

const LanguageScreen = ({ navigation }: Props) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (lang: LANGUAGES) => {
    try {
      await AsyncStorage.setItem(StorageKeys.Language, lang);
      await i18next.changeLanguage(lang);
    } catch {
      Alert.alert(t('general.error.title'), t('general.error.text'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('languageScreen.text')}</Text>
      <SelectLanguageItem
        text={t('languageScreen.eng')}
        onPress={() => handleLanguageChange(LANGUAGES.ENG)}
        isSelected={i18n.language === LANGUAGES.ENG}
      />
      <SelectLanguageItem
        text={t('languageScreen.slo')}
        onPress={() => handleLanguageChange(LANGUAGES.SLO)}
        isSelected={i18n.language === LANGUAGES.SLO}
      />
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

export default LanguageScreen;
