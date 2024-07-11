import { Recipe } from '@app/types/data/recipe.types';

export type GetRecipesRes = { recipes: Recipe[]; total: number; skip: number; limit: number };
