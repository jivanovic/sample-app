import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import MainScreen from '@app/screens/main/MainScreen';
import { screenHeader } from '@app/helpers/navigation';
import LanguageScreen from '@app/screens/language/LanguageScreen';
import { useTranslation } from 'react-i18next';
import { useAppInit } from '@app/hooks/useAppInit';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@app/styles/colors';
import FormScreen from '@app/screens/form/FormScreen';
import ListScreen from '@app/screens/list/ListScreen';
import RoutingScreen from '@app/screens/routing/RoutingScreen';
import InfoScreen from '@app/screens/info/InfoScreen';
import { useSelector } from 'react-redux';
import { getAuthFlags } from '@app/redux/auth/selectors';
import ProtectedScreen from '@app/screens/protected/ProtectedScreen';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useSelector(getAuthFlags);
  const { appIsReady } = useAppInit();

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="Protected"
            component={ProtectedScreen}
            options={({ navigation }) => screenHeader(navigation, t('protectedScreen.navTitle'))}
          />
        ) : (
          <>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={({ navigation }) => ({
                animationTypeForReplace: !isAuthenticated ? 'pop' : 'push',
                ...screenHeader(navigation, t('mainScreen.navTitle')),
              })}
            />
            <Stack.Screen
              name="Form"
              component={FormScreen}
              options={({ navigation }) => screenHeader(navigation, t('formScreen.navTitle'))}
            />
            <Stack.Screen
              name="List"
              component={ListScreen}
              options={({ navigation }) => screenHeader(navigation, t('listScreen.navTitle'))}
            />
            <Stack.Screen
              name="Language"
              component={LanguageScreen}
              options={({ navigation }) => screenHeader(navigation, t('languageScreen.navTitle'))}
            />
            <Stack.Screen
              name="Routing"
              component={RoutingScreen}
              options={({ navigation }) => screenHeader(navigation, t('routingScreen.navTitle'))}
            />
            <Stack.Screen
              name="Info"
              component={InfoScreen}
              options={({ navigation }) => screenHeader(navigation, t('infoScreen.navTitle'))}
            />
          </>
        )}
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default RootStack;
