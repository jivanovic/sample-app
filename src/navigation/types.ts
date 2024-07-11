import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Main: undefined;
  Language: undefined;
  Form: undefined;
  List: undefined;
  Routing: undefined;
  Info: undefined;
  Protected: undefined;
};

export type RootScreen = 'Main' | 'Language' | 'Form' | 'List' | 'Routing' | 'Info' | 'Protected';

export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
export type RootRouteProp<T extends RootScreen> = RouteProp<RootStackParamList, T>;
export type RootScreenProp<T extends RootScreen> = {
  navigation: RootNavigationProp;
  route: RootRouteProp<T>;
};
