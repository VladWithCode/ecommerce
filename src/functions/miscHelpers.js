export const setLocalStorageItem = (k, v) => {
  if (typeof v === 'object') v = JSON.stringify(v);

  localStorage.setItem(k, v);
};

export const getLocalStorageItem = k => {
  try {
    return JSON.parse(localStorage.getItem(k));
  } catch (err) {
    return localStorage.getItem(k);
  }
};
