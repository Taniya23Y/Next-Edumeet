/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { FC } from "react";
import avatarDefault from "../../../public/images/default avatar.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";

type Props = {
  user: any;
  active: number;
  setActive: (active: number) => void;
  avatar: string | null;
  logoutHandler: any;
};

const SideBarProfile: FC<Props> = ({
  user,
  active,
  setActive,
  avatar,
  logoutHandler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 rounded-[5px] cursor-pointer ${
          active === 1 ? "bg-[#bb8add]" : "bg-transparent"
        } 
        `}
        onClick={() => setActive(1)}
      >
        <Image
          src={
            user.avatar || avatar ? user.avatar.url || avatar : avatarDefault
          }
          width={100}
          height={100}
          alt="useravatar"
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] border border-yellow bg-white object-contain cursor-pointer rounded-full"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins text-black">
          My Account
        </h5>
      </div>
      <div
        className={`w-full flex items-center font-medium px-3 py-4 cursor-pointer ${
          active === 2 ? "bg-white text-black rounded-md " : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} fill="#000" />
        <h5 className="pl-2 800px:block hidden font-Poppins text-black">
          Change password
        </h5>
      </div>
      <div
        className={`w-full flex items-center text-black font-medium px-3 py-4 cursor-pointer ${
          active === 3 ? "bg-white rounded-md text-black" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} fill="#000" />
        <h5 className="pl-2 800px:block hidden font-Poppins">
          Enrolled Courses
        </h5>
      </div>

      <div
        className={`w-full flex items-center text-black font-medium px-3 py-4 cursor-pointer ${
          active === 4 ? "bg-white rounded-md text-black" : "bg-transparent"
        }`}
        onClick={() => logoutHandler()}
      >
        <AiOutlineLogout size={20} fill="#000" />
        <h5 className="pl-2 800px:block hidden font-Poppins">Logout</h5>
      </div>
    </div>
  );
};

export default SideBarProfile;
