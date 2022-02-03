import { customerTypes } from '../types/customerTypes';

export const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case customerTypes.customerSetAuth:
      return {
        ...state,
        authenticated: action.payload,
      };

    case customerTypes.customerSet:
      return {
        ...state,
        customerData: action.payload,
      };

    case customerTypes.customerClear:
      return {
        ...state,
        customerData: {},
      };

    default:
      return state;
  }
};
