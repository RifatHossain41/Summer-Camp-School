import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
 
 const [cart] = useCart();
 console.log(cart);
 const total = cart.reduce((sum, item) => sum + item.price, 0);
 const price = parseFloat(total.toFixed(2))

  return (
    <div className="m-10">
      <h2 className="text-center text-3xl font-bold mb-5">Payment Now</h2>
      <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;