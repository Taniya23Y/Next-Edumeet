/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IoMdCheckboxOutline,
  IoMdCheckmarkCircleOutline,
  IoMdClose,
} from "react-icons/io";
import { format } from "timeago.js";
import CourseContentList from "./CourseContentList";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/app/components/payment/CheckoutForm";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

type Props = {
  data: any;
  clientSecret: string;
  stripePromise: any;
  setRoute: any;
  setOpen: any;
};

const CourseDetails = ({
  data,
  clientSecret,
  stripePromise,
  setRoute,
  setOpen: openAuthModal,
}: Props) => {
  // const { user } = useSelector((state: any) => state.auth);
  const { data: userData } = useLoadUserQuery(undefined, {});
  const [user, setUser] = useState<any>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUser(userData?.user);
  }, [userData]);

  const discountPercentage =
    ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;

  const discountPercentagePrice = discountPercentage.toFixed(0);

  const isPurchased =
    user && user?.courses?.find((item: any) => item._id === data._id);

  const handleOrder = (e: any) => {
    if (user) {
      setOpen(true);
    } else {
      setRoute("Login");
      openAuthModal(true);
    }
  };

  return (
    <div className="pt-[5rem]">
      <div className="w-[90%] 800px:w-[90%] m-auto py-5">
        <div className="w-full flex flex-col-reverse 800px:flex-row">
          <div className="w-full 800px:w-[65%] 800px:pr-5">
            <h1 className="text-[25px] font-Poppins font-[600]text-white">
              {data.name}
            </h1>
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center">
                <Ratings rating={data?.ratings} />
                <h5 className=" text-white">{data?.reviews?.length} Reviews</h5>
              </div>
              <h5 className=" text-white">{data?.purchased} Students</h5>
            </div>

            <br />

            <h1 className=" text-[25px] font-Poppins font-[600]text-white ">
              What you will learn from this course?
            </h1>
            <div>
              {data?.benefits?.map((item: any, index: number) => (
                <div className="w-full flex items-center py-2" key={index}>
                  <div className="w-[15px] mr-1">
                    <IoMdCheckmarkCircleOutline
                      size={20}
                      color="green"
                      className="text-white"
                    />
                  </div>
                  <p className="pl-2 text-white">{item.title}</p>
                </div>
              ))}
            </div>
            <br />
            <br />
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white ">
              What are the prerequisites for starting this courses?
            </h1>
            <div>
              {data?.prerequisites?.map((item: any, index: number) => (
                <div className=" w-full flex items-center py-2" key={index}>
                  <div className="w-[15px] mr-1">
                    <IoMdCheckboxOutline
                      size={20}
                      color="green"
                      className=" text-black dark:text-white"
                    />
                  </div>
                  <p className=" pl-2 text-black dark:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <br />
            <br />
            <div>
              <h1 className=" text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Course Overview
              </h1>
              <CourseContentList data={data?.courseData} isDemo={true} />
            </div>
            <br />
            <br />
            <div className="w-full">
              <h1 className=" text-[25px] font-Poppins font-[600] text-black dark:text-white ">
                Course Details
              </h1>
              <p className=" text-[18px] mt-[20px] whitespace-pre-line overflow-hidden text-black dark:text-white">
                {data?.description}
              </p>
            </div>
            <br />
            <br />
            <div className="w-full">
              <div className=" 800px:flex items-center">
                <Ratings rating={data?.ratings} />
                <div className=" mb-2 800px:mb-[unset]" />
                <h5 className=" text-[25px] font-Poppins text-black dark:text-white">
                  {Number.isInteger(data?.ratings)
                    ? data?.ratings.toFixed(1)
                    : data?.ratings.toFixed(2)}{" "}
                  Course Rating * {data?.reviews?.length} Reviews
                </h5>
              </div>
              <br />
              {(data?.reviews && [...data.reviews].reverse()).map(
                (item: any, index: number) => (
                  <div className="w-full pb-4" key={index}>
                    <div className="flex">
                      <div className="w-[50px] h-[50px]">
                        <div className="w-[50px] h-[50px] bg-slate-600 rounded-[50px] flex items-center justify-center cursor-pointer">
                          <h1 className="uppercase text-[18px] text-white">
                            {item.user.name.slice(0, 2)}
                          </h1>
                        </div>
                      </div>

                      <div className=" pl-2">
                        <div className="flex items-center">
                          <h5 className=" text-[18px] pr-2 text-white">
                            {item.user.name}
                          </h5>
                          <Ratings rating={item.rating} />
                        </div>
                        <p className=" text-white">{item.comment}</p>
                        <small className=" text-[#ffffff83]">
                          {format(item?.createdAt)}
                        </small>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="w-full 800px:w-[35%] relative mb-5">
            <div className="sticky top-[100px] left-0 w-full">
              <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />
              <div className="flex items-center">
                <h1 className=" pt-5 text-[25px] text-black dark:text-white">
                  {data.price === 0 ? "Free" : data.price + "$"}
                </h1>
                <h5 className=" pl-3 text-[20px] mt-2 line-through opacity-80 text-black dark:text-white">
                  {data.estimatedPrice}$
                </h5>
                <h4 className=" pl-5 pt-4 text-[22px] text-black dark:text-white">
                  {discountPercentagePrice}% Off
                </h4>
              </div>
              <div className="flex items-center">
                {isPurchased ? (
                  <Link
                    className={`!w-[180px] rounded-3xl px-3 py-2 text-center my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    href={`/course-access/${data._id}`}
                  >
                    Enter to Course
                  </Link>
                ) : (
                  <div
                    className={`!w-[180px] rounded-3xl px-3 py-2 text-center my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    onClick={handleOrder}
                  >
                    Buy Now {data.price}$
                  </div>
                )}
              </div>
              <p>🛠️ Source code included!</p>
              <p>🛠️ Full lifetime access!</p>
              <p>🛠️ Certificate of completion if have!</p>
              <p>🛠️ Premium Support!</p>
            </div>
          </div>
        </div>
      </div>
      <>
        {open && (
          <div className=" w-full h-screen bg-[#00000036] fixed top-0 left-0 z-0 flex items-center justify-center">
            <div className="w-[500px] h-fit bg-white rounded-xl shadow p-3">
              <div className="w-full flex justify-end">
                <IoMdClose
                  size={40}
                  className=" text-black cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="w-full">
                {stripePromise && clientSecret && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm setOpen={setOpen} data={data} user={user} />
                  </Elements>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default CourseDetails;
