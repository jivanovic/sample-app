import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from '@app/constants/storage';
import i18next from 'i18next';
import { LANGUAGES } from '@app/constants/language';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '@app/redux/auth/authSlice';

export const useAppInit = () => {
  const dispatch = useDispatch();
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const [languageCheck, setLanguageCheck] = useState<boolean>(false);
  const [authCheck, setAuthCheck] = useState<boolean>(false);

  useEffect(() => {
    const languageCheck = async () => {
      try {
        const value = await AsyncStorage.getItem(StorageKeys.Language);
        const language = value ?? LANGUAGES.ENG;
        await i18next.changeLanguage(language);
      } catch {
        // React to error in any way we want
      } finally {
        // Set to ready so user is not stuck on loading screen
        setLanguageCheck(true);
      }
    };

    languageCheck();
  }, [dispatch]);

  useEffect(() => {
    const tokenCheck = async () => {
      try {
        const token = await AsyncStorage.getItem(StorageKeys.Token);
        if (token) {
          // We would usually invoke an API to fetch user data and see if the token is stil valid
          dispatch(setIsAuthenticated(true));
        }
      } catch {
        // React to error in any way we want
      } finally {
        // Set to ready so user is not stuck on loading screen
        setAuthCheck(true);
      }
    };

    tokenCheck();
  }, [dispatch]);

  useEffect(() => {
    if (languageCheck && authCheck) setAppIsReady(true);
  }, [languageCheck, authCheck]);

  return { appIsReady };
};
