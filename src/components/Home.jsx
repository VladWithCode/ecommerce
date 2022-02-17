import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero/Hero';
import ProductGallery from './Products/ProductGallery';

function Home() {
  return (
    <div className='container'>
      {/* <Hero src='/img/hero_img.png' alt='Hero IMG' /> */}
      <h1 className='h1'>Productos Destacados</h1>
      <ProductGallery limit={10} />
      <Link className='btn' to='/productos'>
        Ver más
      </Link>
    </div>
  );
}

export default Home;
