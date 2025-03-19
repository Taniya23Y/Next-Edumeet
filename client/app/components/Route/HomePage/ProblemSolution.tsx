import Link from "next/link";
import React from "react";
import {
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaHeadphones,
} from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProblemSolution: React.FC = () => {
  return (
    <div className="w-11/12 mx-auto max-w-maxContent flex flex-col lg:flex-row items-center justify-between mt-10 gap-24">
      {/* ProblemSolution List */}
      <div className="relative w-full lg:w-[45%] flex flex-col">
        <div className="glass w-full max-w-[390px] h-auto p-6 rounded-xl shadow-2xl flex items-center justify-center relative bg-white">
          <div className="w-full h-[22rem] object-fit rounded-lg shadow-xl relative">
            {/* Overlapping Boxes */}
            {[
              {
                icon: <FaRocket className="text-[#2DAE76] w-7 h-7" />,
                bgColor: "bg-[#2DAE76]",
                title: "Full Program",
                description:
                  "Unlock your full potential with structured learning paths.",
                position: "right-[-15%] bottom-[-5%]",
              },
              {
                icon: <FaHeadphones className="text-[#B97FF3] w-7 h-7" />,
                bgColor: "bg-[#B97FF3]",
                title: "Full Support 24/7",
                description:
                  "Our dedicated team is always available to assist you at any time of the day.",
                position: "left-[-15%] bottom-[-5%]",
              },
              {
                icon: <FaLightbulb className="text-[#E6B920] w-7 h-7" />,
                bgColor: "bg-[#E6B920]",
                title: "Innovative Ideas",
                description:
                  "Discover creative solutions and fresh perspectives to enhance learning.",
                position: "left-[-15%] top-[-10%]",
              },
              {
                icon: <FaShieldAlt className="text-[#96DBDD] w-7 h-7" />,
                bgColor: "bg-[#96DBDD]",
                title: "Track Learning",
                description:
                  "Tailor your learning experience with progress tracking.",
                position: "right-[-15%] top-[-10%]",
              },
            ].map(({ icon, bgColor, title, description, position }, index) => (
              <div
                key={index}
                className={`overlap absolute ${position} ${bgColor} text-white p-6 rounded-lg shadow-xl w-[60%] flex flex-col gap-4`}
              >
                <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h1 className="text-xs xl:text-xl font-bold">{title}</h1>
                  <p className="text-xs xl:text-sm opacity-90">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem & Solution Section */}
      <div className="w-full lg:w-[40%] text-center lg:text-left flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          We Know Your Problem & Solution
        </h2>
        <p className="md:text-lg leading-relaxed text-gray-300 font-light">
          EduMeet helps learners navigate the overwhelming amount of free coding
          content available online.
        </p>

        <div className="flex flex-col gap-6">
          {[
            {
              number: "1",
              title: "Too much unstructured content",
              description:
                "Finding the right resources among countless YouTube videos and blogs is overwhelming for learners.",
            },
            {
              number: "2",
              title: "Lack of guided learning paths",
              description:
                "Students struggle with self-paced learning due to the absence of structured roadmaps and hands-on practice.",
            },
          ].map(({ number, title, description }, index) => (
            <div key={index} className="flex gap-6 items-center">
              <div className="bg-gray-300 text-[#2DAE76] p-5 w-12 h-12 flex items-center justify-center text-lg font-semibold rounded-full shadow-md">
                {number}
              </div>
              <div>
                <p className="font-semibold text-lg text-yellow">{title}</p>
                <p className="text-gray-300 font-light text-xs">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <button className="rounded-tl-2xl rounded-br-2xl w-full h-12 flex gap-4 items-center justify-center text-lg font-medium text-gray-900 bg-[#B97FF3] shadow-md hover:bg-[#2DAE76] hover:scale-95 transition-all duration-200 hover:shadow-none">
          <Link
            href="/category"
            className="flex items-center justify-center gap-3"
          >
            Check Courses <FaLongArrowAltRight className="text-xl" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProblemSolution;
