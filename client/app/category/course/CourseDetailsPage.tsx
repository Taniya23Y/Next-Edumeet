/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Header from "@/app/components/Header";
import LoaderOne from "@/app/components/Loader/LoaderOne";
import HighlightText from "@/app/UI/HighlightText";
import Footer from "@/app/utils/Footer";
import Heading from "@/app/utils/Heading";
import Subscribe from "@/app/utils/Subscribe";
import { useGetCoursesDetailsQuery } from "@/redux/features/courses/coursesApi";
import {
  useCreatePaymentIntentMutation,
  // useGetStripePublishablekeyQuery,
} from "@/redux/features/orders/orderApi";
import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import { loadStripe } from "@stripe/stripe-js";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCoursesDetailsQuery(id);
  // const { data: config } = useGetStripePublishablekeyQuery({});
  const [createPaymentIntent, { data: paymentIntentData }] =
    useCreatePaymentIntentMutation();
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      if (data) {
        const amount = Math.round(data?.course.price * 100) || 100; // fallback to 1
        const res = await createPaymentIntent(amount).unwrap();
        setClientSecret(res.client_secret);
      }
    };

    // Fake Test Publishable Key from Stripe dashboard (use your own test key)
    const testKey = "pk_test_51MyFakeKeyFromStripe";

    if (testKey) {
      setStripePromise(loadStripe(testKey));
      if (data) fetchPaymentIntent();
    }

    // if (config?.publishableKey) {
    //   setStripePromise(loadStripe(config.publishableKey));
    //   fetchPaymentIntent();
    // }

    // if (config) {
    //   const publishablekey = config?.publishableKey;
    //   setStripePromise(loadStripe(publishablekey));
    // }
    // if (data) {
    //   const amount = Math.round(data?.course.price * 100);
    //   createPaymentIntent(amount);
    // }
  }, [data, createPaymentIntent]);

  useEffect(() => {
    if (paymentIntentData) {
      setClientSecret(paymentIntentData?.client_secret);
    }
  }, [paymentIntentData]);

  return (
    <>
      {isLoading ? (
        <LoaderOne />
      ) : (
        <div>
          <Heading
            title={data.course.name + " - Edumeet"}
            description="EduMeet organizes structured coding courses from YouTube and other resources, providing clear roadmaps and tailored assignments for efficient learning. 🚀"
            keywords={data?.course?.tags}
          />
          <Header
            open={open}
            setOpen={setOpen}
            setRoute={setRoute}
            route={route}
          />
          {/* {stripePromise && ( */}
          {data?.course && (
            <CourseDetails
              data={data.course}
              stripePromise={stripePromise}
              clientSecret={clientSecret}
              setRoute={setRoute}
              setOpen={setOpen}
            />
          )}
          {/* Subscribe Section */}
          <div className="w-11/12 pt-[1rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
            <h2 className="text-center text-4xl font-semibold mt-10 ">
              <HighlightText text="Subscribe to Newsletter ✨" />
            </h2>
            <div className="pt-4">
              <Subscribe />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
