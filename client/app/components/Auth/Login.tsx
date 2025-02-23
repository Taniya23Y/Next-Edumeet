"use client";

import React, { FC, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "@/app/styles/style";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email!")
    .required("Please Enter Your Email!"),
  password: Yup.string().required("Please, Enter Your Password").min(6),
});

const Login: FC<Props> = ({ setRoute }) => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>
        Welcome To Edumeet <span className="text-green-400">Login</span>
      </h1>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex w-full flex-col gap-y-4"
        >
          <label className={`${styles.label}`} htmlFor="email">
            <p className={`${styles.p}`}>
              Email Address <sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter email address"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className={` ${
                errors.email && touched.email && "border-red-500"
              } w-full p-3 bg-[#2D2D2D] border border-transparent rounded-md text-white 
             focus:ring-2 focus:ring-yellow focus:border-yellow focus:outline-none`}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 pt-2 block">{errors.email}</span>
            )}
          </label>

          <label className={`${styles.label} relative`} htmlFor="password">
            <p className={`${styles.p}`}>
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={!showPassword ? "password" : "text"}
              name="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className={` ${
                errors.password && touched.password && "border-red-500"
              } w-full p-3 bg-[#2D2D2D] border border-transparent rounded-md text-white 
             focus:ring-2 focus:ring-yellow focus:border-yellow focus:outline-none`}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {!showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
            {errors.password && touched.password && (
              <span className="text-red-500 pt-2 block">{errors.password}</span>
            )}
          </label>

          <button type="submit" value="Login" className={`${styles.btnOnly}`}>
            Login
          </button>

          <div className="flex flex-row items-center justify-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <h5 className="mx-4 font-poppins text-[16px] text-white font-Josefin_Sans font-bold">
              Or Join With
            </h5>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex justify-center items-center my-2 gap-3">
            <div className="glass-bg rounded-lg w-15 h-17 text-center">
              <FcGoogle size={30} className="cursor-pointer " />
            </div>
            <div className="glass-bg rounded-lg w-15 h-17 text-center">
              <AiFillGithub size={30} className="cursor-pointer " />
            </div>
          </div>
        </form>
      </div>

      {/* Not have an account? */}
      <div className="mt-4">
        <div className="flex gap-2 items-center justify-center">
          <p className="opacity-40 text-sm">Don’t have an account?</p>
          <span
            onClick={() => setRoute("Sign-Up")}
            className="text-white cursor-pointer hover:text-yellow"
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
