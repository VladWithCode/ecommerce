import { uiTypes } from '../types/uiTypes';

const initialState = {
  toastActive: false,
  toastMsg: '',
  toastErr: false,
  modalActive: false,
  orderId: '',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiTypes.uiShowToast:
      return {
        ...state,
        toastActive: true,
        toastMsg: action.payload.msg,
        toastErr: !!action.payload.err,
      };

    case uiTypes.uiHideToast:
      return {
        ...state,
        toastActive: false,
        toastErr: false,
      };

    case uiTypes.uiShowModal:
      return {
        ...state,
        modalActive: true,
        orderId: action.payload.orderId,
      };

    case uiTypes.uiHideModal:
      return {
        ...state,
        modalActive: false,
        orderId: '',
      };

    default:
      return state;
  }
};
