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
import toast from "react-hot-toast";

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
        const avatar = fileReader.result;
        updateAvatar(avatar);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess || success) {
      setLoaderUser(true);
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
    <div className="glass glass-bg p-4">
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
            alt="user avatar"
            width={100}
            height={100}
            className="w-[80px] h-[80px] cursor-pointer border-[0.2px] bg-yellow border-yellow rounded-full object-contain"
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
            <div className="w-[27px] h-[27px] bg-green-400 text-[#000000] rounded-full absolute bottom-[0.5px] right-[0.5px] flex items-center justify-center cursor-pointer">
              <AiOutlineCamera size={20} className="z-1" />
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
