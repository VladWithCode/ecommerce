import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Stripe from '../Payment/Stripe';

function CustomerForm() {
  const [loading, setLoading] = useState(false);
  const [formValues, handleInputChange, setValue] = useForm({
    street: '',
    col: '',
    zip: '',
    number: '',
    refs: '',
    name: '',
    phone: '',
    mail: '',
    agree: false,
  });

  const { street, col, zip, number, refs, name, phone, mail, agree } =
    formValues;

  const inputChangeMiddleware = e => {
    return handleInputChange(e);
  };

  return (
    <div className='client-info'>
      {loading && (
        <div className='cont-spinner'>
          <div className='spinner'></div>
        </div>
      )}
      <h3>Informacion de envío</h3>
      <div className='form'>
        <div className='form__item'>
          <label htmlFor='name'>Nombre Completo</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={inputChangeMiddleware}
          />
        </div>
        <div className='form__item'>
          <label htmlFor='phone'>Número telefónico</label>
          <input
            type='text'
            name='phone'
            id='phone'
            value={phone}
            onChange={inputChangeMiddleware}
          />
        </div>
        <div className='form__item'>
          <label htmlFor='mail'>Correo electrónico</label>
          <input
            type='text'
            name='mail'
            id='mail'
            value={mail}
            onChange={inputChangeMiddleware}
          />
        </div>
        <div className='form__item'>
          <label htmlFor='street'>Calle</label>
          <input
            type='text'
            name='street'
            id='street'
            value={street}
            onChange={inputChangeMiddleware}
          />
        </div>
        <div className='form__item'>
          <label htmlFor='col'>Colonia</label>
          <input
            type='text'
            name='col'
            id='col'
            value={col}
            onChange={inputChangeMiddleware}
          />
        </div>
        <div className='form__item'>
          <label htmlFor='zip'>Código postal</label>
          <input
            type='text'
            name='zip'
            id='zip'
            value={zip}
            onChange={inputChangeMiddleware}
          />
        </div>
        <div className='form__item'>
          <label htmlFor='number'>Número</label>
          <input
            type='text'
            name='number'
            id='number'
            value={number}
            onChange={inputChangeMiddleware}
          />
        </div>
        <div className='form__item chk-group'>
          <input
            type='checkbox'
            name='agree'
            id='agree'
            onChange={({ target }) => setValue(target.name, target.checked)}
          />
          <label htmlFor='agree' className='chk-label'>
            Acepto los &nbsp;
            <Link to='/terminos-y-condiciones'>Terminos y Condiciones</Link>.
          </label>
        </div>
        {agree && <Stripe formValues={formValues} setLoading={setLoading} />}
      </div>
    </div>
  );
}

export default CustomerForm;
