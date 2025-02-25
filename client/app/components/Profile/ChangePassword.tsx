/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { styles } from "@/app/styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

const ChangePassword: FC = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("password do not Match!");
    } else {
      await updatePassword({ oldPassword, newPassword });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password changed Successfully");
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
            <div className="w-[100%] 800px:w-[60%] mt-5">
              <label className="block pb-2">Enter Your Old Password</label>
              <input
                type="password"
                className={`${styles.inputs} !w-[95%] mb-4 800px:mp-0`}
                required
                placeholder="old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="w-[100%] 800px:w-[60%] mt-2">
              <label className="block pb-2">Enter Your New Password</label>
              <input
                type="password"
                placeholder="new password"
                className={`${styles.inputs} !w-[95%] mb-4 800px:mp-0 text-white`}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="w-[100%] 800px:w-[60%] mt-2">
              <label className="block pb-2">Enter Your Confirm Password</label>
              <input
                type="password"
                placeholder="confirm password"
                className={`${styles.inputs} !w-[95%] mb-4 800px:mp-0 text-white`}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                className={`w-[50%] 800px:w-[150px] h-[40px] border border-yellow bg-yellow text-center text-black font-semibold rounded-[10px]  cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
