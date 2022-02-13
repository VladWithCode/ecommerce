import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import Loading from '../Loading';
import ProductCard from './ProductCard';
import ProductGallery from './ProductGallery';

function Products() {
  const { ctg } = useParams();

  return (
    <div className='container'>
      <ProductGallery />
    </div>
  );
}

export default Products;
