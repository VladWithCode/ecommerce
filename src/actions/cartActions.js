import { cartTypes } from '../types/cartTypes';

export const cartSet = cart => ({
  type: cartTypes.cartSet,
  payload: cart,
});

export const cartAddItem = item => ({
  type: cartTypes.cartAddItem,
  payload: item,
});

export const cartRemoveItem = itemId => ({
  type: cartTypes.cartRemoveItem,
  payload: itemId,
});

export const cartSetQty = qty => ({
  type: cartTypes.cartSetQty,
  payload: qty,
});

export const cartClear = () => ({
  type: cartTypes.cartClear,
});
