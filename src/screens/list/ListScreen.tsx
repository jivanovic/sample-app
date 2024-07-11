import { Colors } from '@app/styles/colors';
import { RootScreenProp } from '../../navigation/types';
import React, { useCallback, useMemo } from 'react';
import { ActivityIndicator, Alert, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import { useRecipes } from '@app/hooks/queries/recipe';
import { flattenData } from '@app/helpers/pagination';
import { Recipe } from '@app/types/data/recipe.types';
import { FlashList } from '@shopify/flash-list';
import { QueryKeys } from '@app/constants/query';
import { GetRecipesRes } from '@app/types/services/recipe/recipe.res.types';
import { RecipeCard } from '@app/components/cards/RecipeCard';
import { RECIPE_CARD_HEIGHT } from '@app/constants/dimensions';
import { Button } from '@app/components/buttons/Button';

type Props = RootScreenProp<'List'>;

const ListScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    fetchNextPage,
    refetch,
  } = useRecipes();

  const flatData = useMemo(() => flattenData(data?.pages), [data?.pages]);

  const handleOnEndReached = () => {
    if (!isLoading && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefreshOnPull = useCallback(() => {
    queryClient.invalidateQueries([QueryKeys.recipes]);
    queryClient.setQueryData<InfiniteData<GetRecipesRes>>([QueryKeys.recipes], data => ({
      pages: data ? data.pages.slice(0, 1) : [],
      pageParams: data ? data.pageParams.slice(0, 1) : [],
    }));
    refetch({ refetchPage: (page, index) => index === 0 });
  }, [refetch, queryClient]);

  const renderItem = ({ item, index }: { item: Recipe; index: number }) => {
    return <RecipeCard index={index} item={item} onPress={() => Alert.alert(item.name)} />;
  };

  const renderHeader = () => {
    return <Text style={styles.text}>{t('listScreen.text')}</Text>;
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {isFetchingNextPage ? <ActivityIndicator style={styles.indicator} /> : null}
      </View>
    );
  };

  const renderEmpty = () => {
    return <Text style={styles.text}>{t('listScreen.empty')}</Text>;
  };

  if (isLoading)
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size={'large'} />
      </View>
    );

  if (isError)
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>{t('general.error.text')}</Text>
        <Button
          text={t('listScreen.refetch')}
          onPress={() => refetch()}
          disabled={isRefetching}
          loading={isRefetching}
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <FlashList
        numColumns={2}
        contentContainerStyle={styles.list}
        data={flatData}
        keyExtractor={extractKey}
        onEndReached={handleOnEndReached}
        estimatedItemSize={RECIPE_CARD_HEIGHT + 16}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={renderItemSeparator}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={handleRefreshOnPull} />
        }
      />
    </View>
  );
};

const renderItemSeparator = () => <View style={{ marginBottom: 16 }} />;

const extractKey = (recipe: Recipe) => recipe.id.toString();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  center: {
    paddingTop: 0,
    justifyContent: 'center',
    alignContent: 'center',
  },
  list: {
    paddingTop: 16,
  },
  text: {
    fontSize: 14,
    letterSpacing: 0.1,
    color: Colors.black100,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 14,
    letterSpacing: 0.1,
    color: Colors.black100,
    marginBottom: 16,
    textAlign: 'center',
  },
  footer: {
    paddingBottom: 24,
  },
  indicator: {
    paddingTop: 16,
  },
});

export default ListScreen;
