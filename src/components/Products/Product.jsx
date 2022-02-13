import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { cartAddItem } from '../../actions/cartActions';
import { productClear, productSet } from '../../actions/productActions';
import { SERVER_URI } from '../../config/globals';
import { priceToString } from '../../functions/miscHelpers';
import { serverRequest } from '../../functions/serverRequest';

function Product() {
  const product = useSelector(state => state.inventory.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product || !Object.keys(product).length) {
      const fetchProduct = async () => {
        const { product, status, err } = await serverRequest(
          '/api/public/products/' + id
        );

        if (err || status !== 'OK') {
          console.log(status);
          console.error(err);
          return navigate('/');
        }

        dispatch(productSet(product));
      };

      fetchProduct();
    }

    return () => {
      dispatch(productClear());
    };
  }, []);

  if (!product) return null;

  const addToCart = async e => {
    dispatch(cartAddItem({ ...product, qty }));
  };

  return (
    <div className='product-page'>
      <div className='product'>
        <div className='product__img-box'>
          <img
            src={SERVER_URI + product.imgs[0]}
            alt={product.name}
            className='img'
          />
        </div>

        <div className='product__info'>
          <div className='box'>
            <h1 className='title'>{product.name}</h1>
            <div className='item price'>
              <p className='item__title'>Precio</p>
              <p className='price'>USD$ {priceToString(product.price)}</p>
            </div>
            <div className='item'>
              <p className='item__title'>Cantidad</p>
              <div className='item__counter'>
                <button onClick={() => setQty(qty - 1)}>-</button>
                <span className='qty'>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>
            <div className='bottom'>
              <button className='btn-add' onClick={addToCart}>
                Añadir al carrito
              </button>
              <div className='description'>
                <h3>Descripción del producto</h3>
                <p>{product.description}</p>
              </div>
              <div className='category'>
                <h3>Categoría</h3>
                <p>{product.category}</p>
              </div>
              <div className='brand'>
                <h3>Marca</h3>
                <p>GRings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
