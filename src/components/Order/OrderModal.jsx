import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiHideModal, uiTempToast } from '../../actions/uiActions';

function OrderModal({ orderId }) {
  const dispatch = useDispatch();

  const copyNumber = e => {
    e.stopPropagation();

    navigator.clipboard.writeText(e.target.textContent);

    dispatch(uiTempToast('ID de la orden copiado a portapapeles'));
  };

  return (
    <div className='modal-bc'>
      <div className='modal'>
        <span className='modal__title'>Compra exitosa</span>
        <div className='modal__info'>
          <p className='msg'>
            Nos pondremos en contacto contigo para ver los detalles del pedido.
            Guarda tu número de pedido para cualquier aclaración o para
            consultar su estado en&nbsp;
            <Link
              to={`/orden/${orderId}`}
              target='_blank'
              className='order-link'>
              Ver mi pedido
            </Link>
          </p>
          <p onClick={copyNumber} className='order-id'>
            {orderId}
          </p>
        </div>
        <span onClick={() => dispatch(uiHideModal())} className='close'>
          &times;
        </span>
      </div>
    </div>
  );
}

export default OrderModal;
