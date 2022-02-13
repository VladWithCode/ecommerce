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

export const priceToString = p => {
  if (typeof +p !== 'number') return p;

  const [i, d] = (+p).toFixed(2).split('.');

  return `${(+i).toLocaleString()}.${d}`;
};

export const asyncHanler = async p => {
  try {
    return [await p, null];
  } catch (err) {
    return [null, err];
  }
};
