/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { styles } from "@/app/styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ChangePassword: FC = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
    } else {
      await updatePassword({ oldPassword, newPassword });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password changed successfully");
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  return (
    <div className="glass glass-bg p-4">
      <div className="w-full pl-7 px-2 800px:pl-0">
        <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center text-white pb-2">
          Change Password
        </h1>
        <div className="w-full">
          <form
            onSubmit={passwordChangeHandler}
            className="flex flex-col items-center"
          >
            {/* Old Password */}
            <div className="w-[100%] 800px:w-[60%] mt-5 relative">
              <label className="block pb-2">
                <p className={`${styles.p}`}>
                  Enter Your Old Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showOldPassword ? "text" : "password"}
                  className={`${styles.inputs} !w-[95%] mb-4 800px:mp-0`}
                  required
                  placeholder="Old password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <span
                  onClick={() => setShowOldPassword((prev) => !prev)}
                  className="absolute right-7 top-[38px] cursor-pointer"
                >
                  {showOldPassword ? (
                    <AiOutlineEye fontSize={21} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={21} fill="#AFB2BF" />
                  )}
                </span>
              </label>
            </div>

            {/* New Password */}
            <div className="w-[100%] 800px:w-[60%] mt-2 relative">
              <label className="block pb-2">
                <p className={`${styles.p}`}>
                  Enter Your New Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showNewPassword ? "text" : "password"}
                  className={`${styles.inputs} !w-[95%] mb-4 800px:mp-0 text-white`}
                  required
                  placeholder="New password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="absolute right-7 top-[38px] cursor-pointer"
                >
                  {showNewPassword ? (
                    <AiOutlineEye fontSize={21} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={21} fill="#AFB2BF" />
                  )}
                </span>
              </label>
            </div>

            {/* Confirm Password */}
            <div className="w-[100%] 800px:w-[60%] mt-2 relative">
              <label className="block pb-2">
                <p className={`${styles.p}`}>
                  Confirm Your Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`${styles.inputs} !w-[95%] mb-4 800px:mp-0 text-white`}
                  required
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-7 top-[38px] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEye fontSize={21} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={21} fill="#AFB2BF" />
                  )}
                </span>
              </label>
            </div>

            <input
              className="w-[50%] 800px:w-[150px] h-[40px] border border-yellow bg-yellow text-center text-black font-semibold rounded-[10px] cursor-pointer"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
