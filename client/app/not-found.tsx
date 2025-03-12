"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import errorImage from "../public/images/error_image.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen text-center bg-[#0A0A0A] text-white px-6 select-none"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={errorImage}
          alt="404 Not Found"
          width={400}
          height={400}
          className="opacity-80 mb-6 pt-7 max-w-full select-none pointer-events-none"
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-6xl font-extrabold text-red-500"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl font-semibold mt-2"
      >
        Oops! Page Not Found
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-lg text-gray-400 mt-2 max-w-lg"
      >
        The page you&apos;re looking for doesn&apos;t exist.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full">
        <Link
          href="/"
          className="group px-6 py-3 bg-green-500 text-black font-semibold rounded-full shadow-md hover:bg-green-400 transition duration-200 flex items-center gap-2"
        >
          <svg
            className="h-5 transition-transform duration-500 group-hover:rotate-[360deg]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
          </svg>
          <span>Go Back Home</span>
        </Link>

        <Link
          href="/category"
          className="group px-6 py-3 bg-green-500 text-black font-semibold rounded-full shadow-md hover:bg-green-400 transition duration-200 flex items-center gap-2"
        >
          <svg
            className="h-5 transition-transform duration-500 group-hover:rotate-[360deg]"
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          <span>Explore Courses Category</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
