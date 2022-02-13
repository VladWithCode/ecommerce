import React from 'react';

function Hero({ src, alt }) {
  return (
    <div className='hero'>
      <img src={src} alt={alt} className='img' />
    </div>
  );
}

export default Hero;
