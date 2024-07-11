import { Colors } from '@app/styles/colors';
import { RootScreenProp } from '../../navigation/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

type Props = RootScreenProp<'Info'>;

const InfoScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('infoScreen.text1')}</Text>
      <Text style={styles.text}>{t('infoScreen.text2')}</Text>
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

export default InfoScreen;
