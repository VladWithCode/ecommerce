import useSWR from 'swr';

export const useAuth = () => {
  const { data, error } = useSWR('/api/public/auth/check', {
    errorRetryCount: 5,
  });

  return { auth: !!data?.authenticated, error, loading: !data && !error };
};
