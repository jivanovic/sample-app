import { Recipe } from '@app/types/data/recipe.types';
import { GetRecipesRes } from '@app/types/services/recipe/recipe.res.types';

export function getNextPageParam(lastPage: GetRecipesRes | undefined): number | undefined {
  if (!lastPage) {
    return undefined;
  }

  const { skip, limit, total } = lastPage;
  const nextPage = skip / limit + 1;
  const hasNextPage = skip + limit < total;

  return hasNextPage ? nextPage : undefined;
}

export function flattenData(page?: GetRecipesRes[]): Recipe[] {
  return (page || []).map(page => page.recipes).flat();
}
