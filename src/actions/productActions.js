import { productTypes } from '../types/productTypes';

export const productSet = product => ({
  type: productTypes.productSet,
  payload: product,
});

export const productClear = () => ({
  type: productTypes.productClear,
});

export const productsSet = products => ({
  type: productTypes.productsSet,
  payload: products,
});

export const productsClear = () => ({
  type: productTypes.productsClear,
});
