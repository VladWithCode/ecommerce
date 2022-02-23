import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__row footer__row--first'>
          <div className='footer__col'>
            <h3 className='footer__heading'>Navegación</h3>
            <Link to='/' className='footer__link'>
              Inicio
            </Link>
            <Link to='/carrito' className='footer__link'>
              Carrito
            </Link>
            <Link to='/orden' className='footer__link'>
              Ver mi pedido
            </Link>
            {/* <Link to='/devoluciones' className='footer__link'>
              Politica de Devoluciones
            </Link>
            <Link to='/politica-de-privacidad' className='footer__link'>
              Politica de Privacidad
            </Link> */}
            <Link to='/terminos-y-condiciones' className='footer__link'>
              Terminos y Condiciones
            </Link>
          </div>
          <div className='footer__col'>
            <h3 className='footer__heading center'>Atención a cliente.</h3>
            <p className='footer__paraph'>
              <strong>Dirección:</strong> Calle Agata #317, Joyas del Valle,
              C.P.34237, Durango, Durango México.
            </p>
            <p className='footer__paraph'>
              <strong>Correo:</strong> gringscontacto@gmail.com
            </p>
            <p className='footer__paraph'>
              <strong>Telefóno:</strong> 618-335-3212
            </p>
            <div className='cards'>
              <svg>
                <use href='/icons/mastercard.svg#mastercard'></use>
              </svg>
              <svg>
                <use href='/icons/visa.svg#visa'></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
