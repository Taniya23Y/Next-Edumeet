/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { FC } from "react";
import avatarDefault from "../../../public/images/default avatar.png";
import Link from "next/link";
import { GraduationCap, LogOutIcon, ShieldAlert } from "lucide-react";
import { useSession } from "next-auth/react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

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
  const { data } = useSession();
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 rounded-tl-[5px] rounded-tr-[5px] cursor-pointer ${
          active === 1 ? "bg-[#bb8add]" : "bg-transparent"
        } 
        `}
        onClick={() => setActive(1)}
      >
        {!user.avatar && data?.user ? (
          <Image
            src={data.user.image ? data.user.image : avatar || avatarDefault}
            width={100}
            height={100}
            alt="useravatar"
            className="w-[32px] h-[32px] 800px:w-[35px] 800px:h-[35px] border border-yellow object-cover cursor-pointer rounded-full"
          />
        ) : (
          <Image
            src={
              user.avatar
                ? user.avatar.url
                : user?.socialAvatar
                ? user?.socialAvatar
                : avatar || avatarDefault
            }
            width={100}
            height={100}
            alt="useravatar"
            className="w-[32px] h-[32px] 800px:w-[35px] 800px:h-[35px] border border-yellow object-cover cursor-pointer rounded-full"
          />
        )}

        <h5 className="pl-2 800px:block hidden font-Poppins text-black">
          My Account
        </h5>
      </div>

      <div
        className={`w-full flex items-center font-medium px-3 py-4 cursor-pointer ${
          active === 2
            ? "bg-[#bb8add] text-black rounded-md "
            : "bg-transparent text-black"
        }`}
        onClick={() => setActive(2)}
      >
        <ShieldAlert size={30} fill="#000" />
        <h5 className="pl-2 800px:block hidden font-Poppins text-black">
          Change password
        </h5>
      </div>

      <div
        className={`w-full flex items-center font-medium px-3 py-4 cursor-pointer ${
          active === 3
            ? "bg-[#bb8add] rounded-md text-black"
            : "bg-transparent text-black"
        }`}
        onClick={() => setActive(3)}
      >
        <GraduationCap size={30} fill="#000" />
        <h5 className="pl-2 text-black 800px:block hidden font-Poppins">
          Enrolled Courses
        </h5>
      </div>

      {user.role === "admin" && (
        <Link
          className={`w-full flex items-center font-medium px-3 py-4 cursor-pointer ${
            active === 4
              ? "bg-[#bb8add] rounded-md text-black"
              : "bg-transparent text-black"
          }`}
          href={"/admin"}
        >
          <MdOutlineAdminPanelSettings size={30} fill="#000" />
          <h1 className="pl-2 text-black 800px:block hidden font-Poppins">
            Admin Dashboard
          </h1>
        </Link>
      )}

      <div
        className={`w-full pl-4 flex items-center text-black font-medium px-3 py-4 cursor-pointer hover:bg-red-500 hover:rounded-[2px] ${
          active === 5 ? "bg-[#bb8add] rounded-md text-black" : "bg-transparent"
        }`}
        onClick={() => logoutHandler()}
      >
        <LogOutIcon size={30} fill="#000" />
        <h5 className="pl-2 text-black 800px:block hidden font-Poppins">
          Logout
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;
