import React from 'react';
import { useSelector } from 'react-redux';
import { useCart } from '../../hooks/useCart';
import CustomerForm from './CustomerForm';
import Resume from './Resume';

function Cart() {
  const { cart, error, loading } = useCart();

  if (!cart) return null;

  if (!cart || cart.items.length <= 0)
    return (
      <div className='carrito-empty'>
        <p>Tu carrito está vacío.</p>
      </div>
    );

  return (
    <div className='carrito'>
      <Resume cart={cart} />
      <CustomerForm />
    </div>
  );
}

export default Cart;
