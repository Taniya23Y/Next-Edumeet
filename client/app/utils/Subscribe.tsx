"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email!");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="pb-[3rem] relative  flex items-center justify-center  ">
      <div className="  w-full p-16 sm:p-10 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-4xl font-extrabold text-white text-center font-Josefin_Sans">
          Stay Updated with <span className="text-yellow-400">EduMeet</span>
        </h2>
        <p className="text-gray-300 text-center mt-2 font-inter">
          Subscribe to receive the latest coding resources and updates.
        </p>

        <div className="mt-6 flex item-center justify-center gap-4 ">
          <div className="flex item-center justify-center gap-6 w-[24rem]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className=" px-4 py-3 text-white bg-white/20 border border-white/30 rounded-lg outline-none placeholder-gray-300 focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleSubscribe}
              className="bg-yellow text-white px-3 py-3 w-full rounded-tl-[2rem] rounded-br-[2rem] rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
