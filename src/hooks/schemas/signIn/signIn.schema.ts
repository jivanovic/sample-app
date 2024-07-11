import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useSignInSchema = () => {
  const { t } = useTranslation();

  return yup.object({
    email: yup
      .string()
      .trim()
      .required(t('formScreen.email.required'))
      .email(t('formScreen.email.format')),
    password: yup
      .string()
      .trim()
      .required(t('formScreen.password.required'))
      .matches(/^\S*$/, t('formScreen.password.matches')),
  });
};
