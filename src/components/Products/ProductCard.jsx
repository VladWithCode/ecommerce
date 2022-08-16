import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSet } from '../../actions/productActions';
import { SERVER_URL } from '../../config/globals';
import { priceToString } from '../../functions/miscHelpers';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { imgs, name, price, _id } = product;

  return (
    <Link
      className='display-product animate__fadeInDown'
      to={`/producto/${_id}`}
      onClick={() => dispatch(productSet(product))}>
      <div className='display-product__image'>
        <img
          src={/* SERVER_URL +  */ imgs[0]}
          alt={`${name}-img`}
          className='img'
        />
      </div>
      <div className='display-product__info'>
        <h2 className='product-name'>{name}</h2>
        <span className='price'>USD${priceToString(price)}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
