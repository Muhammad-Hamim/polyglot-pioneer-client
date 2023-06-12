import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import "./CheckoutForm.css";

const CheckOut = ({ price, selectedClass }) => {
  const stripe = useStripe();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
          // Handle the error gracefully, show an error message, or take appropriate action
        });
    }
  }, [price, axiosSecure]);
  console.log(price);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("payment method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: selectedClass.length,
        classes: selectedClass.map((item) => item.title),
        classId: selectedClass.map((item) => item._id),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment successful",
            timer: 1500,
          });
        }
      });
    }
    setProcessing(false);
  };
  return (
    <>
      {" "}
      <form
        className=" w-2/5 bg-slate-200 p-8 rounded-md"
        onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-600 py-2">{cardError}</p>}
        {transactionId && (
          <p className="text-green-400 font-semibold">
            Transaction successful with transaction Id: {transactionId}
          </p>
        )}

        <button
          className="btn btn-primary mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}>
          Payment
        </button>
      </form>
    </>
  );
};

export default CheckOut;
