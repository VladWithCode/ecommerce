import React from 'react';
import { Link } from 'react-router-dom';

function Hero({ src, alt }) {
  return (
    <div className='hero'>
      <img src={src} alt={alt} className='hero__img' />
      <span className='hero__bg-overlay'></span>
      <h2 className='hero__title h2 fw-300 px-6 ml-6n mb-4'>
        ¡Aprovecha! <span className='fs-1 fw-bold'>DESCUENTOS</span> en anillos
        y argollas.
      </h2>
      <Link
        className='hero__cta btn btn--secondary fs-4 fw-600 py-1 px-3 mb-4'
        to='/productos?promo=true'>
        Ver Promoción
      </Link>
    </div>
  );
}

export default Hero;
