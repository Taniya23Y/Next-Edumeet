/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import CenterAligner from "./CenterAligner";
import { testimonial } from "@/app/utils/testimonial";

export default function Testimonial() {
  const sliderRef = useRef<any>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <CenterAligner className="rounded-xl">
      <section className="max-w-[1000px] mx-auto w-full relative overflow-hidden min-h-[30px] p-4 rounded-xl">
        <Slider {...settings} ref={sliderRef}>
          {testimonial.map((single, index) => (
            <div key={index} className="h-full rounded-xl">
              <section className="mx-auto backdrop-blur-lg bg-gradient-to-br from-[#222] via-[#00000090] to-[#111] border border-white shadow-[0_4px_30px_rgba(255,255,0,0.3)] p-10 sm:p-16 rounded-xl grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-10 min-h-[400px]">
                {/* Left Section */}
                <div className="flex flex-col items-center text-center">
                  <div className="border-4 rounded-full border-white p-2">
                    <Image
                      src={single.avatar}
                      alt={single.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mt-4 text-yellow">
                    {single.name}
                  </h2>
                  <p className="text-gray-400 text-sm">{single.username}</p>
                  <p className="text-gray-400 text-lg">{single.profession}</p>
                </div>

                {/* Right Section */}
                <div className="glass glass-bg p-6">
                  <div className="space-y-5">
                    <FaQuoteLeft className="text-red-500 text-5xl" />
                    <p className="text-gray-200 text-lg sm:text-xl font-medium leading-relaxed">
                      {single.comment}
                    </p>
                    <FaQuoteRight className="text-red-500 text-5xl ml-auto" />

                    {/* Star Ratings */}
                    <div className="flex items-center gap-2 text-yellow-500">
                      <h1 className="text-lg sm:text-[20px] font-semibold text-emerald-400">
                        Ratings:
                      </h1>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[14px] md:text-xl">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute top-[50%] left-[20px] z-10 text-3xl text-purple-400"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          className="absolute top-[50%] right-[20px] z-10 text-3xl text-purple-400"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </section>
    </CenterAligner>
  );
}
