import { useEffect } from 'react';
import useSWR from 'swr';
import { swrFetcher } from '../functions/serverRequest';

export const useCategories = () => {
  const { data, error } = useSWR('/api/public/categories', swrFetcher, {
    refreshInterval: 30000,
  });

  return {
    categories: data?.categories.map(ctg => ctg.name),
    loading: !error && !data,
    error: error,
  };
};
