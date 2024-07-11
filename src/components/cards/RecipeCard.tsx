import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@app/styles/colors';
import { Recipe } from '@app/types/data/recipe.types';
import { Image } from 'expo-image';
import { PLACEHOLDER_BASE64, PLACEHOLDER_BLURHASH } from '@app/constants/images';
import { RECIPE_CARD_HEIGHT, RECIPE_CARD_WIDTH } from '@app/constants/dimensions';

interface Props {
  item: Recipe;
  index: number;
  onPress: (item: Recipe) => void;
}

export const RecipeCard = memo(({ item, index, onPress }: Props) => {
  const { id, name, image } = item;

  return (
    <TouchableOpacity
      style={[styles.container, { marginLeft: !(index % 2) ? 0 : 8 }]}
      onPress={() => onPress(item)}
    >
      <Image
        recyclingKey={id.toString()}
        source={{ uri: image ?? PLACEHOLDER_BASE64 }}
        placeholder={PLACEHOLDER_BLURHASH}
        placeholderContentFit="cover"
        style={styles.coverImg}
        contentFit="cover"
        transition={200}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

RecipeCard.displayName = 'RecipeCard';

const styles = StyleSheet.create({
  container: {
    width: RECIPE_CARD_WIDTH,
    height: RECIPE_CARD_HEIGHT,
    backgroundColor: Colors.green20,
    borderRadius: 6,
    overflow: 'hidden',
  },
  coverImg: {
    width: RECIPE_CARD_WIDTH,
    height: RECIPE_CARD_WIDTH,
    backgroundColor: Colors.white,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  title: {
    color: Colors.black100,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.3,
    fontWeight: '500',
  },
});
