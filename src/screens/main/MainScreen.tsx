import { Colors } from '@app/styles/colors';
import { RootScreen, RootScreenProp } from '../../navigation/types';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Row } from '@app/components/Row';
import { ArrowRightIcon } from '@app/components/icons/ArrowRight';
import { LanguageIcon } from '@app/components/icons/Language';
import { PencilIcon } from '@app/components/icons/Pencil';
import { ListIcon } from '@app/components/icons/List';
import { LockClosedIcon } from '@app/components/icons/LockClosed';
import { InfoIcon } from '@app/components/icons/Info';

type Props = RootScreenProp<'Main'>;

const MainScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const handleRowPress = (screen: RootScreen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{t('mainScreen.textWelcome')}</Text>
      <Text style={[styles.text, styles.spacing]}>{t('mainScreen.textAbout')}</Text>
      <Row
        text={t('mainScreen.form')}
        onPress={() => handleRowPress('Form')}
        leftIcon={<PencilIcon />}
        rightIcon={<ArrowRightIcon />}
      />
      <Row
        text={t('mainScreen.list')}
        onPress={() => handleRowPress('List')}
        leftIcon={<ListIcon />}
        rightIcon={<ArrowRightIcon />}
      />
      <Row
        text={t('mainScreen.language')}
        onPress={() => handleRowPress('Language')}
        leftIcon={<LanguageIcon />}
        rightIcon={<ArrowRightIcon />}
      />
      <Row
        text={t('mainScreen.routing')}
        onPress={() => handleRowPress('Routing')}
        leftIcon={<LockClosedIcon />}
        rightIcon={<ArrowRightIcon />}
      />
      <Row
        text={t('mainScreen.info')}
        onPress={() => handleRowPress('Info')}
        leftIcon={<InfoIcon />}
        rightIcon={<ArrowRightIcon />}
      />
    </ScrollView>
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
    marginBottom: 12,
  },
  spacing: {
    marginBottom: 16,
  },
});

export default MainScreen;
