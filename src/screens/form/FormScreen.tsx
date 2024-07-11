import { Colors } from '@app/styles/colors';
import { RootScreenProp } from '../../navigation/types';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SignInForm } from '@app/hooks/schemas/signIn/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignInSchema } from '@app/hooks/schemas/signIn/signIn.schema';
import { timeout } from '@app/helpers/timeout';
import { ControlledTextField } from '@app/components/controlled/ControlledTextField';
import { useHeaderHeight } from '@react-navigation/elements';
import { Button } from '@app/components/buttons/Button';

type Props = RootScreenProp<'Form'>;

const FormScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const headerHeight = useHeaderHeight();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues: SignInForm = { email: '', password: '' };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(useSignInSchema()),
    defaultValues,
  });

  const onSubmit = handleSubmit(data => handleSubmitPress(data));

  const handleSubmitPress = async (data: SignInForm) => {
    // Dummy logic that represents a submittion
    setIsLoading(true);
    await timeout(2000);
    setIsLoading(false);
    Alert.alert(t('formScreen.submit.title'), `${t('formScreen.submit.text')} ${data.email}.`);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
        pointerEvents="box-none"
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.text}>{t('formScreen.text')}</Text>
          <ControlledTextField
            control={control}
            name="email"
            label={t('formScreen.email.label')}
            placeholder={t('formScreen.email.label')}
            wrapperStyle={styles.inputSpacing}
            errorMessage={errors.email?.message}
            autoCapitalize="none"
            disabled={isLoading}
          />
          <ControlledTextField
            control={control}
            name="password"
            label={t('formScreen.password.label')}
            placeholder={t('formScreen.password.label')}
            wrapperStyle={styles.buttonSpacing}
            clearTextOnFocus={false}
            isPassword
            errorMessage={errors.password?.message}
            textContentType="oneTimeCode"
            autoCapitalize="none"
            disabled={isLoading}
          />
          <Button
            text={t('formScreen.submit.button')}
            onPress={onSubmit}
            loading={isLoading}
            disabled={isLoading}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  text: {
    fontSize: 14,
    letterSpacing: 0.1,
    color: Colors.black100,
    marginBottom: 16,
  },
  inputSpacing: {
    marginBottom: 10,
  },
  buttonSpacing: {
    marginBottom: 16,
  },
});

export default FormScreen;
