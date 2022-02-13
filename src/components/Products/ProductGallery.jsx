import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Loading from '../Loading';
import ProductCard from './ProductCard';

function ProductGallery({ limit }) {
  let fetchURI = '/api/public/products?';

  if (limit) fetchURI += `limit=${limit}&`;

  const { ctg } = useParams();

  if (ctg) fetchURI += `ctgs=${ctg}&`;

  const { data, error } = useSWR(fetchURI);

  if (!data && !error) return <Loading />;

  return (
    <div className='products-list'>
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
