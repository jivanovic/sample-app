import axiosInstance from '@app/constants/axios';
import { QueryKeys } from '@app/constants/query';
import { getNextPageParam } from '@app/helpers/pagination';
import recipeService from '@app/services/recipe/recipeService';
import { GetRecipesRes } from '@app/types/services/recipe/recipe.res.types';
import { UseInfiniteQueryResult, useInfiniteQuery } from '@tanstack/react-query';

export const useRecipes = (): UseInfiniteQueryResult<GetRecipesRes, Error> =>
  useInfiniteQuery(
    [QueryKeys.recipes],
    ({ pageParam = 1 }) => recipeService(axiosInstance).getRecipes(pageParam, 10),
    { getNextPageParam }
  );
