import React, { useEffect, useState } from 'react';
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { uiShowModal, uiTempToast } from '../../actions/uiActions';
import { cartClear } from '../../actions/cartActions';
import { serverRequest } from '../../functions/serverRequest';

export default function ApplePay({
  setLoading,
  cart,
  formValues,
  clientSecret,
  shipment,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!stripe || !elements) return;

    const pr = stripe.paymentRequest({
      currency: 'usd',
      country: 'MX',
      requestPayerName: true,
      total: {
        label: 'Compra en GRINGS',
        amount: cart.total * 100,
      },
    });

    pr.canMakePayment().then(res => {
      if (!res) return;

      setPaymentRequest(pr);
    });
  }, [stripe, elements]);
  if (paymentRequest) {
    paymentRequest.on('paymentmethod', async e => {
      setLoading(true);
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        { payment_method: e.paymentMethod.id },
        { handleActions: false }
      );

      if (error) {
        dispatch(
          uiTempToast(
            'Ocurrio un error con tu forma de pago, intenta una diferente.'
          )
        );
        setLoading(false);
        return e.complete('fail');
      }

      e.complete('success');

      if (paymentIntent.status === 'requires_action') {
        const { error } = await stripe.confirmCardPayment(clientSecret);

        if (error) {
          setLoading(false);
          return dispatch(
            uiTempToast(
              'Ocurrio un error con tu forma de pago, intenta una diferente.'
            )
          );
        }
      }

      const { sale, status, message, err } = await serverRequest(
        '/api/public/stipe/save-sale',
        'POST',
        {
          intentId: paymentIntent.id,
          cart,
          customerData: { ...formValues, shipment },
        }
      );
      setLoading(false);

      if (err) {
        console.log(err);
        dispatch(
          uiTempToast(err.message || 'Ocurrio un error al realizar el pago')
        );
      }

      if (status !== 'OK') {
        return dispatch(
          uiTempToast(message || 'Ocurrio un error al realizar el pago')
        );
      }

      dispatch(uiTempToast('Pago exitoso!'));
      dispatch(cartClear());

      dispatch(uiShowModal(sale._id));
    });
  }

  return (
    <form className='mt-2' data-gpay-form>
      {paymentRequest && (
        <PaymentRequestButtonElement
          options={{ paymentRequest: paymentRequest }}
        />
      )}
    </form>
  );
}
