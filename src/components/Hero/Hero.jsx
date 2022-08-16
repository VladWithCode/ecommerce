import React from 'react';
import { Link } from 'react-router-dom';

function Hero({ src, alt }) {
  return (
    <div className='hero'>
      <img src={src} alt={alt} className='hero__img' />
      <span className='hero__bg-overlay'></span>
      <h2 className='h2 hero__title px-6 pb-3 fw-300'>
        ¡Aprovecha! <span className='fs-1 fw-bold'>DESCUENTOS</span> en anillos
        y argollas.
      </h2>
      <Link
        className='hero__cta btn btn-primary fs-3 fw-600 text-white'
        to='/productos/promocion'>
        Ver Promoción
      </Link>
    </div>
  );
}

export default Hero;
