import { RootStackParamList } from '@app/navigation/types';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}
