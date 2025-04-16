"use client";

import React from "react";
import student1 from "../../../../public/images/yellowImage.png";
import student2 from "../../../../public/images/purpleImage.png";
import student3 from "../../../../public/images/redImage.png";
import student4 from "../../../../public/images/greenImage.png";
import student5 from "../../../../public/images/blueImage.png";
import student6 from "../../../../public/images/grayGreenImage.png";

import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import HighlightText from "../../../UI/HighlightText";
import { StaticImageData } from "next/image";

const ContactHero: React.FC = () => {
  const studentImages: StaticImageData[] = [
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
  ];

  return (
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="font-bold text-3xl">
        <HighlightText text="Get In Touch" />
      </h1>
      <p className="mt-4 text-lg text-white">
        Connect with our team and get in touch
      </p>
      <p className="text-lg text-white">
        —we’re here to help and answer any questions you have!
      </p>

      {/* Overlapping Student Images & Arrow */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <div className="flex -space-x-3">
          {studentImages.map((student, index) => (
            <Image
              key={index}
              src={student}
              alt={`Student ${index + 1}`}
              className="w-14 h-14 rounded-full object-cover border-[3px] border-white shadow-lg"
            />
          ))}
        </div>

        {/* Bouncing Animated Arrow */}
        <motion.div
          className="text-5xl text-white"
          animate={{ x: [0, 20, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <FaLongArrowAltRight />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHero;
