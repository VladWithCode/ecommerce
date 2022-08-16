import React from 'react';
import { useDispatch } from 'react-redux';
import { cartRemoveItem, cartSetQty } from '../../actions/cartActions';
import { SERVER_URL } from '../../config/globals';
import { priceToString } from '../../functions/miscHelpers';

function ProductShort({ product, isOrderDetail }) {
  const dispatch = useDispatch();
  const { product: id, name, price, qty, imgs, totalPrice } = product;

  return (
    <div className='products__item'>
      {!isOrderDetail && (
        <>
          <span onClick={() => dispatch(cartRemoveItem(id))} className='delete'>
            &times;
          </span>
          <div className='image'>
            <img src={SERVER_URL + imgs[0]} alt={name} className='img' />
          </div>
        </>
      )}
      <div className='info'>
        <h3>{name}</h3>
        <p>
          <strong>
            ${priceToString(isOrderDetail ? price / 100 : price)} &times; {qty}
          </strong>
        </p>
        {!isOrderDetail && (
          <div className='counter'>
            <button
              onClick={() => dispatch(cartSetQty(id, qty - 1))}
              disabled={qty <= 1}>
              &minus;
            </button>
            <span className='qty'>{qty}</span>
            <button onClick={() => dispatch(cartSetQty(id, qty + 1))}>
              &#43;
            </button>
          </div>
        )}
      </div>
      <div className='total'>
        <span>Total:</span>
        <p>
          USD$
          {priceToString(isOrderDetail ? product.total / 100 : totalPrice)}
        </p>
      </div>
    </div>
  );
}

export default ProductShort;
