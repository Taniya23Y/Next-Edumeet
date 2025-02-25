/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../public/images/edumeet-yellow-logo-removebg-preview.png";
import avatar from "../../public/images/Avatar.png";
import Image from "next/image";
import NavItems from "../utils/NavItems";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/Signup";
import Verification from "../components/Auth/Verification";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import {
  useLogoutQuery,
  useSocialAuthMutation,
} from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ setOpen, route, open, setRoute }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogout] = useState(false);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  useEffect(() => {
    if (!user && data) {
      socialAuth({
        email: data?.user?.email,
        name: data?.user?.name,
        avatar: data?.user?.image,
      });
    }

    if (data === null) {
      if (isSuccess) {
        const hasLoggedIn = sessionStorage.getItem("loggedIn");
        if (!hasLoggedIn) {
          toast.success("Login Successfully!");
          sessionStorage.setItem("loggedIn", "true"); // Prevent future triggers
        }
      }
    }

    if (data === null) {
      setLogout(true);
    }

    if (error) {
      const errorMessage =
        "status" in error
          ? `Error ${error.status}: ${JSON.stringify(error.data)}`
          : error.message || "Something went wrong!";
      toast.error(errorMessage);
    }
  }, [data, user, error]);

  return (
    <div className="container mx-auto fixed left-0 right-0 top-0 z-50 py-3 px-0 xl:px-2">
      {/* outer container  */}
      <div className="flex justify-between items-center rounded-2xl bg-black p-2 border-[0.5px] border-[#ffffff13]">
        {/* Left - Logo */}
        <div>
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image className="h-9 w-9 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-yellow font-semibold">
              Edumeet
            </span>
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex gap-9 text-[14px] text-white rounded-xl z-2">
          <NavItems isMobile={false} setOpen={setOpen} setRoute={setRoute} />
        </div>

        {/* Right - Buttons & Mobile Menu */}
        <div className="flex gap-4">
          <div className="flex gap-4">
            {user ? (
              // Show Avatar when user is logged in
              <div className="border-[1.5px] border-yellow rounded-full w-9 h-9 flex items-center justify-center">
                <Link href="/profile">
                  <Image
                    src={user.avatar.url || data?.user?.image || avatar}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer bg-yellow object-contain"
                  />
                </Link>
              </div>
            ) : (
              // Show Login & Signup buttons if user is not logged in
              <div className="hidden md:flex gap-4">
                <button
                  className="bg-[#1ef397] flex justify-center items-center font-bold rounded-xl px-5 py-1 cursor-pointer text-black hover:bg-[#48eea6]"
                  onClick={() => {
                    setRoute("Login");
                    setOpen(true);
                  }}
                >
                  Login
                </button>
                <button
                  className="bg-[#1ef397] flex justify-center items-center rounded-tl-2xl rounded-br-2xl font-bold px-5 py-1 cursor-pointer text-black hover:bg-[#48eea6]"
                  onClick={() => {
                    setRoute("Sign-Up");
                    setOpen(true);
                  }}
                >
                  Signup
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex gap-4">
            <div className="md:hidden">
              <button onClick={() => setOpenSidebar(!openSidebar)}>
                <Menu className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {openSidebar && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md"
              onClick={() => setOpenSidebar(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed top-0 left-0 h-full w-[95%] bg-[#151515] p-6 flex flex-col gap-4 shadow-lg overflow-y-auto scrollbar-custom"
            >
              <button
                onClick={() => setOpenSidebar(false)}
                className="absolute top-4 right-4 z-50"
              >
                <X className="w-8 h-8 text-white" />
              </button>
              <NavItems isMobile={true} setOpen={setOpen} setRoute={setRoute} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* for login | signup | verification  */}
      {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              component={Login}
            />
          )}
        </>
      )}

      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              component={SignUp}
            />
          )}
        </>
      )}

      {route === "Verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              component={Verification}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
