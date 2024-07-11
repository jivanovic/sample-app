import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const RECIPE_CARD_WIDTH = (width - 32 - 16) / 2;
export const RECIPE_CARD_HEIGHT = (width - 32 - 16) / 2 + 58;
