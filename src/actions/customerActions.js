import { serverRequest } from '../functions/serverRequest';
import { customerTypes } from '../types/customerTypes';

export const customerSetAuth = logged => ({
  type: customerTypes.customerSetAuth,
  payload: logged,
});

export const customerCheckAuth = () => {
  return dispatch => {
    const logged = serverRequest('/api/public/auth/check').then(
      res => !!res.authenticated
    );

    dispatch(customerSetAuth(logged));
  };
};

export const customerSet = customer => ({
  type: customerTypes.customerSet,
  payload: customer,
});

export const customerClear = () => ({
  type: customerTypes.customerClear,
});
