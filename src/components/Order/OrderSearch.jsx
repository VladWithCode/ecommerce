import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function OrderSearch() {
  const [id, setId] = useState('');

  return (
    <div className='container order'>
      <h2 className='order__title'>¡Busca tu pedido!</h2>
      <div className='order__form'>
        <label htmlFor='order-id'>Código de pedido:</label>
        <input
          id='order-id'
          onChange={e => setId(e.target.value)}
          value={id}
          type='text'
        />
        <Link to={`/orden/${id}`} className='order__button'>
          Buscar
        </Link>
      </div>
    </div>
  );
}

export default OrderSearch;
