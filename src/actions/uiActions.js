import { uiTypes } from '../types/uiTypes';

export const uiShowToast = (msg, isError) => ({
  type: uiTypes.uiShowToast,
  payload: { msg, isError },
});

export const uiHideToast = () => ({
  type: uiTypes.uiHideToast,
});

export const uiTempToast = (msg, isError) => {
  return dispatch => {
    dispatch(uiShowToast(msg, isError));
    setTimeout(() => {
      dispatch(uiHideToast());
    }, 3000);
  };
};

export const uiShowModal = orderId => ({
  type: uiTypes.uiShowModal,
  payload: { orderId },
});

export const uiHideModal = () => ({
  type: uiTypes.uiHideModal,
});
