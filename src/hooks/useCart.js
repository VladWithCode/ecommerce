import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { cartSet } from '../actions/cartActions';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../functions/miscHelpers';

export const useCart = () => {
  const dispatch = useDispatch();
  const storedCart = useSelector(state => state.cart);
  const { data, error } = useSWR('/api/public/cart', {
    errorRetryCount: 2,
  });

  let cart = data?.cart
    ? data.cart
    : !!Object.keys(storedCart).length
    ? storedCart
    : getLocalStorageItem('cart');

  if (!cart) {
    cart = {
      subtotal: 0,
      tax: 0,
      shipment: 0,
      total: 0,
      items: [],
    };

    setLocalStorageItem('cart', cart);
  }

  useEffect(() => {
    dispatch(cartSet(cart));
  }, [data]);

  return {
    cart,
    error: error?.info?.status !== 'AUTH_ERR' ? error : null,
    loading: !data && !error,
  };
};
