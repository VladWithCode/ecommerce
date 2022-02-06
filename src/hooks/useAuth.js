import useSWR from 'swr';

export const useAuth = () => {
  const { data, error } = useSWR('/api/public/auth/check');

  return { auth: !!data?.authenticated, error, loading: !data && !error };
};
