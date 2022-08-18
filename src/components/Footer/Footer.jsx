import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__row footer__row--first'>
          <div className='footer__col footer__col--flex'>
            <h3 className='footer__heading text-white'>Navegación</h3>
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
              <strong>Dirección:</strong> Calle General Miguel Gutiérrez #423,
              Fracc Domingo Arrieta, C.P. 34180, Durango, Durango México.
            </p>
            <p className='footer__paraph'>
              <strong>Correo:</strong> shinyandglowing@outlook.com
            </p>
            <p className='footer__paraph'>
              <strong>Telefóno:</strong> 618-155-6501
            </p>
          </div>
        </div>
        <div className='footer__row'>
          <div className='footer__col'>
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
        <div className='footer__row'>
          <div className='footer__col'>
            <p className='footer__paraph fw-300 fs-6'>
              &copy; 2022 eJewels.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
