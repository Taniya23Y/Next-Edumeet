"use client";

import { FaBook, FaBullseye, FaTrophy, FaUsers } from "react-icons/fa";
import VisionBtn from "../../../UI/VisionBtn";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const features = [
  {
    icon: FaBook,
    title: "Quality Learning Resources",
    description: "Access curated coding courses and study materials.",
    bg: "bg-[#FFE1B5]",
  },
  {
    icon: FaBook,
    title: "Quality Learning Resources",
    description: "Access curated coding courses and study materials.",
    bg: "bg-[#EB9ED8]",
  },
  {
    icon: FaBullseye,
    title: "Structured Learning Paths",
    description: "Follow step-by-step roadmaps for tech careers.",
    bg: "bg-[#51C3DD]",
  },
  {
    icon: FaUsers,
    title: "Community Support",
    description: "Interact with peers and curated Community members.",
    bg: "bg-[#94D1B0]",
  },
];

const Vision = () => {
  const constraintRef = useRef(null);
  const [buttons] = useState([
    "JavaScript",
    "Online Coding",
    "Java",
    "UI-UX",
    "Backend",
    "Web-dev",
    "Curated Courses",
    "Free",
  ]);

  return (
    <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12 mx-auto">
      {/* Header */}
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-2xl pt-5 pb-5">Why Edumeet?</h1>
        <p className="font-poppins text-white px-4">
          &ldquo;Your Tech Journey Starts Here 💡 Master Coding with
          EduMeet&ldquo; 🔥
        </p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-xl p-6 text-black`}
            >
              <div className="flex items-center gap-4">
                <VisionBtn Icon={feature.icon} />
                <p>{feature.title}</p>
              </div>
              <h1 className="font-bold mt-4">{feature.description}</h1>
            </div>
          ))}
        </div>

        {/* Draggable Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          <div className="bg-yellow rounded-xl p-6 text-black">
            <div className="flex items-center gap-4">
              <VisionBtn Icon={FaTrophy} />
              <p>Project-Based Learning</p>
            </div>
            <h1 className="font-bold mt-4">
              Apply skills with real-world projects.
            </h1>
          </div>
          <motion.div ref={constraintRef} className="w-full">
            <div className="w-full bg-[#FFEFD8] glass rounded-xl p-6 text-black shadow-lg relative overflow-hidden">
              <div className="flex flex-wrap gap-2 pt-4 justify-end">
                {buttons.map((label, id) => (
                  <motion.button
                    key={id}
                    className="bg-[#874FD4] text-white px-10 py-2 rounded-2xl shadow-md cursor-pointer"
                    drag
                    dragConstraints={constraintRef}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
