/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { styles } from "../../styles/style";
import avatarIcon from "../../../public/images/default avatar.png";
import { AiOutlineCamera } from "react-icons/ai";
import {
  useEditProfileMutation,
  useUpdateAvatarMutation,
} from "@/redux/features/user/userApi";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { toast } from "react-toastify";

type Props = {
  avatar: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user && user.name);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [loaderUser, setLoaderUser] = useState(false);
  const {} = useLoadUserQuery(undefined, {
    skip: loaderUser ? false : true,
  });
  const [editProfile, { isSuccess: success, error: err }] =
    useEditProfileMutation();

  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatars = fileReader.result;
        updateAvatar({
          avatar: avatars,
        });
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess) {
      setLoaderUser(true);
      toast.success("user updated successfully");
    }

    if (error || err) {
      console.log(error);
    }

    if (success) {
      toast.success("Profile Updated Successfully!");
      setLoaderUser(true);
    }

    if (typeof window !== "undefined") {
      const message = localStorage.getItem("profileUpdateSuccess");
      if (message) {
        toast.success(message);
        localStorage.removeItem("profileUpdateSuccess");
      }
    }
  }, [isSuccess, error, success, err]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name !== "") {
      await editProfile({
        name: name,
      });
    }
  };
  return (
    <div className="glass glass-bg pt-2">
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={
              user?.avatar
                ? user?.avatar?.url
                : user?.socialAvatar
                ? user?.socialAvatar
                : avatar || avatarIcon
            }
            alt="profile-pic"
            quality={100}
            width={120}
            height={120}
            className="w-[120px] h-[120px] cursor-pointer border-[3px] border-yellow rounded-full"
          />
          <input
            type="file"
            name=""
            id="avatar"
            className="hidden"
            onChange={imageHandler}
            accept="image/png,image/jpg, image/jpeg, image/webp"
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-green-400 text-[#000000] rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
              <AiOutlineCamera size={20} className="text-white" />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-[100%]">
              <label className="block pb-2">Your Full Name</label>
              <input
                type="text"
                className={`${styles.inputs} !w-[95%] bg-black !focus:ring-0 mb-4 800px:mb-0`}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-[100%] pt-2">
              <label className="block pb-2">Your Email address</label>
              <input
                type="text"
                readOnly
                className={`${styles.inputs} !w-[95%] bg-black mb-1 800px:mb-0`}
                required
                value={user?.email}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className={`w-[50%] 800px:w-[150px] h-[40px] border border-yellow bg-yellow text-center text-black font-semibold rounded-[10px] mt-8 cursor-pointer`}
              required
              value="Update"
            />
          </div>
        </form>
        <br />
      </div>
    </div>
  );
};

export default ProfileInfo;
