import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiShowModal, uiTempToast } from '../../actions/uiActions';
import { cartClear } from '../../actions/cartActions';
import { serverRequest } from '../../functions/serverRequest';

export default function StripeCheckout({
  setLoading,
  cart,
  formValues,
  clientSecret,
  shipment,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentIntentId, setPaymentIntentId] = useState('');

  const [firstLoad, setFirstLoad] = useState(true);
  const [disableButton, setDisableButton] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!stripe) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      setPaymentIntentId(paymentIntent.id);
      setDisableButton(false);

      if (firstLoad) return setFirstLoad(false);

      setLoading(true);

      switch (paymentIntent.status) {
        case 'succeeded':
          dispatch(uiTempToast('Pago exitoso!'));
          break;
        case 'processing':
          dispatch(uiTempToast('Se está procesando tu pago.'));
          break;
        case 'requires_payment_method':
          dispatch(
            uiTempToast(
              'Tu pago no ha sido exitoso, intenta de nuevo o con otra tarjeta.',
              true
            )
          );
          setLoading(false);
          break;
        default:
          uiTempToast('Algo salió mal.', true);
          setLoading(false);
          break;
      }
    });
    // eslint-disable-next-line
  }, [stripe]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setDisableButton(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setDisableButton(false);
      setLoading(false);

      switch (error.type) {
        case 'card_error':
        case 'validation_error':
          return dispatch(uiTempToast(error.message, true));
        default:
          return dispatch(
            uiTempToast('Un error inesperado ha ocurrido.', true)
          );
      }
    }

    const { sale, status, message, err } = await serverRequest(
      '/api/public/stripe/save-sale',
      'POST',
      {
        intentId: paymentIntentId,
        cart,
        customerData: { ...formValues, shipment },
      },
      {
        'Content-Type': 'application/json',
      }
    );
    setLoading(false);

    if (err) {
      console.log(err);
      dispatch(
        uiTempToast(err.message || 'Ocurrio un error al realizar el pago')
      );

      return;
    }

    if (status !== 'OK') {
      return dispatch(
        uiTempToast(message || 'Ocurrio un error al realizar el pago')
      );
    }

    dispatch(uiTempToast('Pago exitoso!'));
    dispatch(cartClear());

    dispatch(uiShowModal(sale._id));
  };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentElement id='payment-element' />
      <button disabled={disableButton} id='submit'>
        <span id='button-text'>Pagar</span>
      </button>
    </form>
  );
}
