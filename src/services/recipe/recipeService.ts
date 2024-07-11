import { GetRecipesRes } from '@app/types/services/recipe/recipe.res.types';
import { AxiosInstance } from 'axios';

const recipeService = (client: AxiosInstance) => {
  const getRecipes = async (page: number, limit: number) => {
    const { data } = await client.get<GetRecipesRes>(`recipes?skip=${page * 10}&limit=${limit}`);

    return data;
  };

  return { getRecipes };
};

export default recipeService;
