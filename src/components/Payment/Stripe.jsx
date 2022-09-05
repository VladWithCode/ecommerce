import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Wallet from './Wallet';
import { serverRequest } from '../../functions/serverRequest';
import { uiTempToast } from '../../actions/uiActions';
import StripeCheckout from './StripeCheckout';

const stripePromise = loadStripe(
  'pk_live_51LdSOJKIoxcMWONH8qmu2XsQn1nZTJSIf7K3TC0VnWxATWbKEGzy4uuvd01XhrCSoASJVQQTvkXF0mbWHJdfJBSo008UGzGzMS'
  // 'pk_test_51LXu7lLV9DtXHkMfb3qjFvXlfnx0n6CWklylF3MWGh5kOkrx8tjmUK6EGzbDqcMlOB6Q2QYFA6I0DJc2gdXEBuIW00rURXbXUM'
);

function Stripe({ setLoading, formValues, shipment }) {
  const { cart } = useSelector(state => state);

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const paymentIntent = async () => {
      setLoading(true);
      const { clientSecret, err } = await serverRequest(
        '/api/public/stripe/payment-intents',
        'POST',
        { cart },
        { 'Content-Type': 'application/json' }
      );
      setLoading(false);

      if (err) {
        console.log(err);
        uiTempToast(
          err.message || 'Ocurrio un error al conectarse con el servidor',
          true
        );
      } else {
        setClientSecret(clientSecret);
      }
    };

    paymentIntent();
    // eslint-disable-next-line
  }, []);

  const options = {
    clientSecret,
    appearance: { theme: 'stirpe' },
  };

  return (
    clientSecret && (
      <Elements options={options} stripe={stripePromise}>
        <Wallet
          clientSecret={clientSecret}
          setLoading={setLoading}
          cart={cart}
          formValues={formValues}
          shipment={cart.shipment}
        />
        <StripeCheckout
          clientSecret={clientSecret}
          setLoading={setLoading}
          cart={cart}
          formValues={formValues}
          shipment={cart.shipment}
        />
      </Elements>
    )
  );
}

export default Stripe;
