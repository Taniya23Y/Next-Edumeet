/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { styles } from "@/app/styles/style";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useCreateOrderMutation } from "@/redux/features/orders/orderApi";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import socketIO from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

type Props = {
  setOpen: any;
  data: any;
  user: any;
};

const CheckoutForm = ({ setOpen, data, user }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<any>("");
  const [createOrder, { data: orderData, error }] = useCreateOrderMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [loadUser, setLoadUser] = useState(false);
  const {} = useLoadUserQuery({ skip: loadUser ? false : true });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // DUMMY PAYMENT SUCCESS FLOW
    setIsLoading(true);

    // Simulate a fake paymentIntent
    const dummyPaymentIntent = {
      id: "pi_dummy_123456",
      status: "succeeded",
      created: Date.now(),
      amount: data.price * 100,
      currency: "inr",
      payment_method: "card",
    };

    // Call your order creation API directly
    await createOrder({
      courseId: data._id,
      payment_info: dummyPaymentIntent,
    });

    // if (!stripe || !elements) {
    //   return;
    // }
    // setIsLoading(true);
    // const { error, paymentIntent } = await stripe.confirmPayment({
    //   elements,
    //   redirect: "if_required",
    // });
    //

    setIsLoading(false);
  };

  useEffect(() => {
    if (orderData) {
      setLoadUser(true);
      socketId.emit("notification", {
        title: "New Order",
        message: `You have a new order from ${data.name}`,
        userId: user?._id,
      });
      redirect(`/course-access/${data._id}`);
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [orderData, error, data, user]);

  return (
    // <form id="payment-form" onSubmit={handleSubmit}>
    //   <LinkAuthenticationElement id="link-authentication-element" />
    //   <PaymentElement id="payment-element" />
    //   <button disabled={isLoading || !stripe || !elements} id="submit">
    //     <span
    //       id="button-text"
    //       className={`${styles.btnVideo} cursor-pointer mt-2 !h-[35px]`}
    //     >
    //       {isLoading ? "Paying..." : "Pay now"}
    //     </span>
    //   </button>
    //   {message && (
    //     <div id="payment-message" className="text-[red] font-Poppins pt-2">
    //       {message}
    //     </div>
    //   )}
    // </form>

    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto space-y-5"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="4242 4242 4242 4242"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="expiry"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry
          </label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            placeholder="MM / YY"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="cvc"
            className="block text-sm font-medium text-gray-700"
          >
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            placeholder="CVC"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <button
        disabled={isLoading}
        id="submit"
        type="submit"
        className={`w-full mt-4 h-[40px] text-white rounded-md ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } transition-all duration-200`}
      >
        {isLoading ? "Paying..." : `Pay ₹${data?.price || 0}`}
      </button>

      {message && (
        <div id="payment-message" className="text-red-500 font-medium pt-2">
          {message}
        </div>
      )}
    </form>
  );
};
export default CheckoutForm;
