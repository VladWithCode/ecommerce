import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import Loading from '../Loading';
import ProductCard from './ProductCard';

function ProductGallery({ limit }) {
  const [params] = useSearchParams();

  let fetchURI = '/api/public/products?';

  if (limit) fetchURI += `limit=${limit}&`;

  const { ctg } = useParams();

  if (ctg && ctg !== 'Ver todo') fetchURI += `ctgs=${ctg}&`;

  if (params.get('promo') === 'true') fetchURI += 'promo=true&';

  const { data, error } = useSWR(fetchURI);

  if (!data && !error) return <Loading />;

  return (
    <div className='products-list py-3'>
      {error ? (
        <p>Oops... Ocurrio un error inesperado.</p>
      ) : data.products.length <= 0 ? (
        <div className='container-empty'>
          <p>Por el momento no hay producos de esta categoria</p>
        </div>
      ) : (
        data.products.map(p => <ProductCard product={p} key={p._id} />)
      )}
    </div>
  );
}

export default ProductGallery;
