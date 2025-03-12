"use client";

import Image from "next/image";
import ImageHero from "../../../../public/images/adminHero.png";
import { useEffect, useRef, useState } from "react";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Loader from "../../Loader/Loader";

const ImageAbout: React.FC = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      setScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading || !showContent ? (
        <Loader onComplete={() => setShowContent(true)} />
      ) : (
        <div className="relative w-screen h-screen">
          <div className="space-y-6 mx-auto">
            <h1 className="text-3xl md:text-[2.7rem] text-center font-bold gradient-title animate-gradient p-3">
              {data?.layout?.banner?.firstTitle}
            </h1>
            <h1 className="text-3xl md:text-[2.7rem] text-center font-bold gradient-title animate-gradient p-3">
              {data?.layout?.banner?.midTitle}
            </h1>

            <p className="mx-auto text-center pb-16 max-w-[600px] text-muted-foreground md:text-xl">
              {data?.layout?.banner?.lastTitle}
            </p>
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
                // src={data?.layout?.banner?.image?.url}
                width={1100}
                height={350}
                alt="Home Preview"
                className="rounded-lg shadow-2xl border mx-auto"
                priority
              />
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
      )}
    </>
  );
};

export default ImageAbout;
