"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import countryCode from "../../../Helper/data/countrycode.json";
import { styles } from "@/app/styles/style";

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
    <div className="md:w-1/2 border-2 border-white p-8 rounded-xl shadow-lg backdrop-blur-md">
      <h1 className="font-bold text-center text-2xl pb-2">
        Welcome to Edumeet
      </h1>
      <p className="pb-9 text-center text-[#C691FC]">
        Sign in to continue your learning journey
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label
              htmlFor="firstname"
              className={`${styles.label} text-emerald-500`}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstName")}
              className={`${styles.input}`}
            />
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label
              htmlFor="lastname"
              className={`${styles.label} text-emerald-500`}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter last name"
              {...register("lastName")}
              className={`${styles.input}`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={`${styles.label} text-emerald-500`}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            {...register("email")}
            className={`${styles.input}`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNo" className={`text-emerald-500`}>
            Phone Number
          </label>
          <div className="flex gap-5">
            <select
              id="countryCode"
              {...register("countryCode")}
              className={`${styles.input}`}
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
              className={`${styles.input}`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className={`${styles.label} text-emerald-500`}
          >
            Message
          </label>
          <textarea
            id="message"
            cols={30}
            rows={2}
            placeholder="Enter your message here"
            {...register("message")}
            className={`${styles.input}`}
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-yellow hover:bg-yellow rounded-md text-black font-semibold shadow-lg hover:shadow-[#dcd7b338] transition-all duration-200 hover:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
