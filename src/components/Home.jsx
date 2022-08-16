import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero/Hero';
import ProductGallery from './Products/ProductGallery';

function Home() {
  return (
    <div className='container'>
      <Hero src='/img/banner.jpg' alt='Hero IMG' />
      <h2 className='h2 pb-3'>Productos Destacados</h2>
      <ProductGallery limit={10} />
      <Link className='btn mt-6' to='/productos'>
        Ver más
      </Link>
    </div>
  );
}

export default Home;
