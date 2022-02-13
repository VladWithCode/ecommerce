import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='not-found'>
      <h1>Ooooops...</h1>
      <h2>La página que buscas no está disponible</h2>
      <p>
        Vuelve al{' '}
        <Link to='/'>
          <a>inicio</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
