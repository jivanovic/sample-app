import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '@app/navigation/rootNavigation';
import { I18nextProvider } from 'react-i18next';
import i18n from '@app/translations/i18n';
import { TouchableOpacity, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@app/redux/store';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@app/constants/query';

// @ts-ignore
TouchableOpacity.defaultProps = {
  activeOpacity: 0.9,
};

// @ts-ignore
ScrollView.defaultProps = {
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
};

function App() {
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch {
        // React to error in any way we want
      }
    })();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar style="auto" />
            <RootStack />
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
