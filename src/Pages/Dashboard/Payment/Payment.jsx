import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [selectedClass] = useSelectedClass();
  console.log(selectedClass);
  const total = selectedClass.reduce(
    (total, course) => total + course.price,
    0
  );
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="max-w-screen-xl mx-auto py-24 flex justify-center items-center min-h-screen">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          selectedClass={selectedClass}
          price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
