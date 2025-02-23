"use client";

import { useEffect, useRef } from "react";

const Video: React.FC = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        videoElement.classList.add("scrolled");
      } else {
        videoElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative  flex justify-center items-center">
      <div className="relative rounded-2xl p-[4px]  ">
        {/* Animated Gradient Border */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1rem",
            padding: "4px",
            background:
              "linear-gradient(90deg, #ff00ff, #ff6600, #00ffff, #ff00ff)",
            backgroundSize: "300% 300%",
            animation: "gradientAnimation 3s infinite linear",
            zIndex: 0, // Ensure the border is below the video
          }}
        ></div>

        {/* Video Wrapper (with zIndex to keep it above the border) */}
        <div
          ref={videoRef}
          className="relative  rounded-2xl overflow-hidden z-10 bg-black"
        >
          <video
            muted
            loop
            autoPlay
            className="rounded-2xl md:w-[63rem] md:h-[30rem]  object-cover"
          >
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Inline Keyframes for Gradient Animation */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Video;
