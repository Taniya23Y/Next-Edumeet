/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import {
  useGetHeroDataQuery,
  useEditLayoutMutation,
} from "../../../../redux/features/layout/layoutApi";
import React, { useEffect, useRef, useState } from "react";
import ImageHero from "../../../../public/images/adminHero.png";
import { AiOutlineCamera } from "react-icons/ai";
import toast from "react-hot-toast";
import { styles } from "@/app/styles/style";

const EditHero = () => {
  const [image, setImage] = useState("");
  const [firstTitle, setFirstTitle] = useState("");
  const [midTitle, setMidTitle] = useState("");
  const [lastTitle, setLastTitle] = useState("");
  const { data, refetch } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });
  const [editLayout, { isSuccess, error }] = useEditLayoutMutation();

  useEffect(() => {
    if (data) {
      setFirstTitle(data?.layout?.banner.firstTitle);
      setMidTitle(data?.layout?.banner.midTitle);
      setLastTitle(data?.layout?.banner.semiTitle);
      setImage(data?.layout?.banner?.image?.url);
    }
    if (isSuccess) {
      refetch();
      toast.success("About Hero updated successfully!");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
      }
    }
  }, [data, isSuccess, error, refetch]);

  const imageRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      setScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUpdate = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    await editLayout({
      type: "Banner",
      image,
      firstTitle,
      midTitle,
      lastTitle,
    });
  };

  return (
    <>
      <div className="relative w-screen h-screen">
        <div className="space-y-6 mx-auto text-center">
          <textarea
            value={firstTitle}
            onChange={(e) => setFirstTitle(e.target.value)}
            placeholder="EduMeet: Empowering Your Learning"
            className="text-3xl md:text-[2.7rem] text-center font-bold gradient-title animate-gradient p-3"
          ></textarea>
        </div>
        <div className="space-y-6 mx-auto text-center">
          <textarea
            value={midTitle}
            onChange={(e) => setMidTitle(e.target.value)}
            placeholder="Navigate Your Coding Journey with Ease"
            className="text-3xl md:text-[2.7rem] text-center font-bold gradient-title animate-gradient p-3"
          ></textarea>
        </div>
        <div className="space-y-6 mx-auto text-center">
          <textarea
            value={lastTitle}
            onChange={(e) => setLastTitle(e.target.value)}
            placeholder="Access structured roadmaps, free coding courses, and tailored
            assignments to enhance your skills. Learn efficiently and stay ahead
            with EduMeet!"
            className="mx-auto text-center pb-16 max-w-[600px] md:text-xl text-gray-500"
          ></textarea>
        </div>
        {/* Grid Background */}
        <div className="absolute inset-0 w-full h-full grid-background pointer-events-none"></div>

        <div className="relative flex justify-center items-center flex-col hero-image-wrapper w-full">
          <div
            ref={imageRef}
            className={`hero-image transition-transform duration-700 ${
              scrolled ? "scrolled" : ""
            }`}
          >
            <Image
              src={ImageHero}
              width={1100}
              height={350}
              alt="Home Preview"
              className="rounded-lg shadow-2xl w-[] h-[] md:w-[] md-h-[] border mx-auto"
              priority
            />
            <input
              type="file"
              name=""
              id="banner"
              accept="image/*"
              onChange={handleUpdate}
              className="hidden"
            />
            <label htmlFor="banner" className="absolute top-1 left-1 z-20">
              <AiOutlineCamera className="text-white text-[18px] cursor-pointer" />
            </label>

            <div
              className={`${
                styles.btnOnly
              } !w-[100px] !min-h-[40px] !h-[40px] text-white bottom-10  left-1
          ${
            data?.layout?.banner?.firstTitle !== firstTitle ||
            data?.layout?.banner?.midTitle !== midTitle ||
            data?.layout?.banner?.lastTitle !== lastTitle ||
            data?.layout?.banner?.image?.url !== image
              ? "!cursor-pointer !bg-[#42d383]"
              : "!cursor-not-allowed"
          }
          !rounded absolute bottom-12 right-12`}
              onClick={
                data?.layout?.banner?.firstTitle !== firstTitle ||
                data?.layout?.banner?.midTitle !== midTitle ||
                data?.layout?.banner?.lastTitle !== lastTitle ||
                data?.layout?.banner?.image?.url !== image
                  ? handleEdit
                  : () => null
              }
            >
              Save
            </div>
          </div>
        </div>

        {/* Tailwind Animation Keyframe */}
        <style>
          {`
          .hero-image {
            transform: rotateX(15deg);
            transition: transform 0.7s ease-out;
            will-change: transform;
          }

          .hero-image.scrolled {
            transform: rotateX(0deg);
          }
        `}
        </style>
      </div>
    </>
  );
};

export default EditHero;
