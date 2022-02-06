import useSWR from 'swr';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../functions/miscHelpers';

export const useCart = () => {
  const { data, error } = useSWR('/api/public/cart');
  let storedCart = getLocalStorageItem('cart');

  if (!data?.cart && !storedCart) {
    storedCart = {
      subtotal: 0,
      tax: 0,
      shipment: 0,
      total: 0,
      items: [],
    };

    setLocalStorageItem('cart', storedCart);
  }

  return {
    cart: data?.cart || storedCart,
    error: error?.info.status !== 'AUTH_ERR' ? error : null,
    loading: !data && !error,
  };
};
