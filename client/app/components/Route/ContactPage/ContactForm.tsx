"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import countryCode from "../../../Helper/data/countrycode.json";

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phoneNo: "",
      countryCode: "",
    });
  }, [reset]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="md:w-1/2 bg-[#2A2A2A] p-8 rounded-xl shadow-lg backdrop-blur-md">
      <h1 className="font-bold text-center text-2xl pb-2">
        Welcome to Edumeet
      </h1>
      <p className="pb-9 text-center text-[#C691FC]">
        Sign in to continue your learning journey
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="firstname" className="text-white">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstName")}
              className="w-full p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white"
            />
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="lastname" className="text-white">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter last name"
              {...register("lastName")}
              className="w-full p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            {...register("email")}
            className="w-full p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNo" className="text-white">
            Phone Number
          </label>
          <div className="flex gap-5">
            <select
              id="countryCode"
              {...register("countryCode")}
              className="w-[81px] p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white"
            >
              {countryCode.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.code} - {item.country}
                </option>
              ))}
            </select>

            <input
              type="tel"
              id="phonenumber"
              placeholder="12345 67890"
              {...register("phoneNo")}
              className="w-full p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            id="message"
            cols={30}
            rows={2}
            placeholder="Enter your message here"
            {...register("message")}
            className="w-full p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-yellow hover:bg-yellow rounded-md text-black font-semibold shadow-lg hover:shadow-purple-400/50 transition-all duration-200 hover:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
