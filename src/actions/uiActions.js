import { uiTypes } from '../types/uiTypes';

export const uiShowToast = () => ({
  type: uiTypes.uiShowToast,
});

export const uiHideToast = () => ({
  type: uiTypes.uiHideToast,
});

export const uiShowModal = () => ({
  type: uiTypes.uiShowModal,
});

export const uiHideModal = () => ({
  type: uiTypes.uiHideModal,
});
