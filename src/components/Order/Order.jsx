import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { SERVER_URL } from '../../config/globals';
import { priceToString } from '../../functions/miscHelpers';
import { swrFetcher } from '../../functions/serverRequest';
import ProductShort from '../Products/ProductShort';

function Order() {
  const { id } = useParams();
  const { data, error } = useSWR('/api/public/sales/' + id, swrFetcher);
  const [loading, setLoading] = useState(false);
  const [sale, setSale] = useState({});

  console.log(data, error);

  useEffect(() => {
    if (!data && !error) setLoading(true);
    else setLoading(false);

    if (data && data.sale) setSale(data.sale);
  }, [data, error]);

  return (
    <div className='container order'>
      {loading || !Object.keys(sale).length ? (
        <div className='loading'>Cargando...</div>
      ) : (
        <>
          <h2 className='order__title'>¡Pedido encontrado!</h2>

          <div className='order__list'>
            <h3>Resumen del pedido</h3>
            {sale.items.map(p => (
              <ProductShort key={p.product} product={p} isOrderDetail={true} />
            ))}
            <p className='resume__total'>
              Total:{' '}
              <strong>USD${priceToString(sale.payment.total / 100)}</strong>
            </p>
            <p className='status'>
              Estado del pedido: <strong>en camino</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;
