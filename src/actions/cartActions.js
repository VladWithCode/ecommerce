import {
  addToCart,
  calculateCartTotals,
  removeFromCart,
  updateQty,
} from '../functions/cartHelpers';
import { setLocalStorageItem } from '../functions/miscHelpers';
import CartService from '../services/CartService';
import { cartTypes } from '../types/cartTypes';
import { uiShowToast } from './uiActions';

export const cartSet = cart => ({
  type: cartTypes.cartSet,
  payload: cart,
});

export const cartAddItem = item => {
  return async (dispatch, getState) => {
    const product = item;
    const { customer, cart } = getState();

    try {
      const localCart = addToCart(cart, product);
      let serverCart;

      if (customer.authenticated) {
        serverCart = await CartService.updateCart(localCart);
      }

      setLocalStorageItem('cart', serverCart || localCart);
      dispatch(cartSet(serverCart || localCart));
    } catch (err) {
      console.log(err);

      dispatch(uiShowToast(err.message || 'Ocurrio un error en el servidor'));

      return;
    }
  };
};

export const cartSetQty = (id, qty) => {
  return async (dispatch, getState) => {
    const { customer, cart } = getState();

    try {
      let localCart = {
        ...cart,
        items: updateQty(cart.items, id, qty),
      };
      localCart = {
        ...localCart,
        ...calculateCartTotals(
          localCart.items,
          localCart.tax,
          localCart.shipment
        ),
      };
      let serverCart;

      if (customer.authenticated) {
        serverCart = await CartService.updateCart(localCart);
      }

      setLocalStorageItem('cart', serverCart || localCart);
      dispatch(cartSet(serverCart || localCart));
    } catch (err) {
      console.log(err);

      dispatch(uiShowToast(err.message || 'Ocurrio un error en el servidor'));
    }
  };
};

export const cartRemoveItem = id => {
  return async (dispatch, getState) => {
    const { customer, cart } = getState();

    try {
      let localCart = removeFromCart(cart, id);
      let serverCart;

      if (customer.authenticated) {
        serverCart = await CartService.updateCart(localCart);
      }

      setLocalStorageItem('cart', serverCart || localCart);
      dispatch(cartSet(serverCart || localCart));
    } catch (err) {
      console.log(err);

      dispatch(uiShowToast(err.message || 'Ocurrio un error en el servidor'));
    }
  };
};

export const cartClear = () => ({
  type: cartTypes.cartClear,
});
