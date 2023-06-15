import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";


const CheckoutForm = ({ price }) => {
  const {user} = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  

  useEffect( () => {
    axiosSecure.post('/create-payment-intent', { price })
     .then(data => {
      console.log(data.data.clientSecret)
      setClientSecret(data.data.clientSecret)
     })
   }, [price, axiosSecure])

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
 
    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

     const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown'
          },
        },
      },
    );
    
    if(confirmError){
      console.log(confirmError)
    }

   console.log(paymentIntent)
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-outline btn-secondary rounded mt-5" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;