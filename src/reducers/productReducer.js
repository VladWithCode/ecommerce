import { productTypes } from '../types/productTypes';

const initialState = {
  products: [],
  product: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.productSet:
      return {
        ...state,
        product: action.payload,
      };

    case productTypes.productClear:
      return {
        ...state,
        product: null,
      };

    case productTypes.productsSet:
      return {
        ...state,
        products: action.payload,
      };

    case productTypes.productsClear:
      return {
        ...state,
        products: [],
      };

    default:
      return state;
  }
};
