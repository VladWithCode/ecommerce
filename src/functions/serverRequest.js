// const SERVER_URI = 'http://localhost:3030';
const SERVER_URI = 'https://shinyandglowingnaths.com';

export const swrFetcher = async url => {
  const res = await fetch(SERVER_URI + url);

  if (!res.ok) {
    const data = await res.json();
    const e = new Error(
      data.error || data.message || 'Error al conectarse con el servidor.'
    );
    e.info = data;
    e.status = res.status;

    throw e;
  }

  return res.json();
};

export const serverRequest = async (endpoint, method, body, headers) => {
  const options = {
    method: method || 'GET',
    credentials: 'include',
    mode: 'cors',
  };

  body && (options.body = JSON.stringify(body));
  headers && (options.headers = headers);

  try {
    const res = await fetch(SERVER_URI + endpoint, options);
    return await res.json();
  } catch (err) {
    return { err };
  }
};
