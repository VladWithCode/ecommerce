// const SERVER_URI = 'http://localhost:3030';
const SERVER_URI = 'https://shinyandglowingnaths.com';

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
