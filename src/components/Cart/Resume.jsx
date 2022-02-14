import React from 'react';
import { priceToString } from '../../functions/miscHelpers';
import ProductShort from '../Products/ProductShort';

function Resume({ cart }) {
  return (
    <div className='products'>
      {cart.items.map(i => (
        <ProductShort key={i.product} product={i} />
      ))}
      <div className='price-resume'>
        <span>
          Subtotal:
          <strong>USD${priceToString(cart.subtotal)}</strong>
        </span>
        <p className='shipment'>
          Envío:
          <strong>
            {(() => {
              const str = `USD$${priceToString(cart.shipment || 0)}`;

              if (!cart.shipment) return <del>{str}</del>;

              return str;
            })()}
          </strong>
        </p>
        <p className='resume-total'>
          Total:
          <strong>USD${priceToString(cart.total)}</strong>
        </p>
      </div>
    </div>
  );
}

export default Resume;
