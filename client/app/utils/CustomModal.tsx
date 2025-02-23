/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { Modal, Box } from "@mui/material";
import logo from "../../public/images/edumeet-yellow-logo-removebg-preview.png";
import Image from "next/image";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  component: any;
  setRoute?: (route: string) => void;
};

const CustomModal: FC<Props> = ({
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(true)} // Prevent closing when clicking outside
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="container"
      slotProps={{ backdrop: { invisible: true } }} // Fix deprecated BackdropProps
    >
      <>
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md"
        />

        <Box className="absolute top-1/2 left-1/2 w-[87vw] h-[90vh] xl:w-[60vw] md:h-[80vh] lg:w-[40vw] lg:h-[89vh] -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row scrollbar-custom border-[0.1px] border-slate-300">
          {/* Left Side (Hidden on Small Screens) */}
          <Box className="hidden md:flex w-1/2 p-6 bg-[#0A0A0A] text-white flex-col ">
            <div
              className="fixed top-4 left-4 flex items-center text-white cursor-pointer z-10"
              onClick={() => setOpen(false)}
            >
              <FaLongArrowAltLeft className="mr-1" />
              <p>Back</p>
            </div>

            <div className="pt-12">
              <div className="logo bg-black rounded-full w-[3.5rem] h-[3.5rem] text-left">
                <Image src={logo} alt="logo" className="object-contain" />
              </div>
              <h1 className="pt-2 font-extrabold text-3xl text-left text-yellow">
                Welcome to EduMeet
              </h1>
              <p className="pt-2 mt-2 text-left text-lg font-Josefin_Sans">
                Join us to access free-quality curated educational resources.
              </p>
            </div>

            {/* Terms and Privacy */}
            <div className="mt-auto text-left text-sm text-white">
              <p>
                <Link
                  href="/terms"
                  className="pr-3 opacity-40 hover:underline hover:text-white hover:opacity-100"
                >
                  Terms of Use
                </Link>{" "}
                |{" "}
                <Link
                  href="/privacy-policy"
                  className="pl-3 opacity-40 hover:underline hover:text-white hover:opacity-100"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </Box>

          {/* Centered Vertical Small Wave Divider (Hidden on Small Screens) */}
          <Box className="hidden md:flex items-center justify-center">
            <svg
              width="60"
              height="100%"
              viewBox="0 0 30 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#2E2E2D">
                {[...Array(60)].map((_, index) => (
                  <circle key={index} cx="33" cy={7 + index * 16} r="8.5" />
                ))}
              </g>
            </svg>
          </Box>

          {/* Right Side (Full Width on Small Screens) */}
          <Box className="w-full md:w-8/12 p-6 flex flex-col justify-center items-center bg-[#2E2E2D] scrollbar-custom overflow-y-auto">
            <div
              className="flex fixed top-4 left-4  items-center text-white cursor-pointer z-10"
              onClick={() => setOpen(false)}
            >
              <FaLongArrowAltLeft className="mr-1" />
              <p>Back</p>
            </div>
            <div className="pt-[6rem] md:pt-0">
              <Component setOpen={setOpen} setRoute={setRoute} />
            </div>
          </Box>
        </Box>
      </>
    </Modal>
  );
};

export default CustomModal;
