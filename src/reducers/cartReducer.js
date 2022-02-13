import { cartSet } from '../actions/cartActions';
import { uiShowToast } from '../actions/uiActions';
import { addToCart, updateQty } from '../functions/cartHelpers';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../functions/miscHelpers';
import CartService from '../services/CartService';
import { cartTypes } from '../types/cartTypes';

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case cartTypes.cartSet:
      return {
        ...state,
        ...action.payload,
      };

    case cartTypes.cartClear:
      localStorage.removeItem('cart');

      return {};

    case cartTypes.cartAddItem:

    case cartTypes.cartRemoveItem:
      return {
        ...state,
      };

    case cartTypes.cartSetQty:
      return {
        ...state,
        items: updateQty(state.items, action.payload.id, action.payload.qty),
      };

    default:
      return state;
  }
};
