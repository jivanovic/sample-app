import { QueryClient } from '@tanstack/react-query';

export enum QueryKeys {
  recipes = 'recipes',
}

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

export default queryClient;
