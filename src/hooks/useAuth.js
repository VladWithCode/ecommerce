import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

export const useAuth = () => {
  const dispatch = useDispatch();
  const {} = useSelector();
  const { data, error } = useSWR('/api/public/customers', undefined, {
    refreshInterval: 1000 * 60 * 5,
  });
};
