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
  // 'pk_live_51KTeJQKNm6XlwkiFtXT6IkAADVPhAA3Z24wTMT2Cca5mL42i0CJDJeJWGuNIy9qIGPfEXW7tfcl6IAvCCBS7sTmy00Yem0wMWM'
  'pk_test_51KTeJQKNm6XlwkiF092BgNIHtT2soeRz4u6A6DsxCQsWl9Y55d6ZLfNTrys0fwrmlNvuffW3ZHBAwsWbgTeZOXHs000XV3HZqj'
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
