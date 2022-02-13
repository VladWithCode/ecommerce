import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function NavCart() {
  const { cart, error, loading } = useCart();

  if (error) console.log(error);

  return (
    <Link className='display-cart' to={'carrito'}>
      <svg>
        <use href='/icons/cart.svg#cart'></use>
      </svg>
      <p>Carrito</p>
      <div className='display-cart__qty'>
        <span>{loading ? '' : cart.items.length}</span>
      </div>
    </Link>
  );
}

export default NavCart;
