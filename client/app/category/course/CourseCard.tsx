/* eslint-disable @typescript-eslint/no-explicit-any */
import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  return (
    <div className="group w-[320px] h-[400px] hover:border-2 hover:border-gray-400 bg-black bg-opacity-70 backdrop-blur-lg border border-[#ffffff1a] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-md p-4 relative overflow-hidden flex flex-col justify-between">
      {/* Clickable Wrapper including Enroll Button */}
      <Link
        href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
        className="flex flex-col justify-between h-full"
      >
        {/* Course Thumbnail */}
        <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
          <Image
            src={item.thumbnail.url}
            width={500}
            height={300}
            className="rounded-md object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
            alt={item.name}
          />
        </div>

        {/* Course Title */}
        <h1 className="mt-4 text-lg font-semibold text-white tracking-wide truncate group-hover:text-emerald-400 transition-colors">
          {item.name}
        </h1>

        {/* Ratings & Students Count */}
        <div className="w-full flex items-center justify-between mt-2">
          <Ratings rating={item.ratings} />
          <h5
            className={`text-gray-300 text-sm ${
              isProfile && "hidden 800px:inline"
            }`}
          >
            {item.purchased} Students
          </h5>
        </div>

        {/* Price & Lecture Count */}
        <div className="w-full flex items-center justify-between mt-4">
          <div className="flex items-center">
            <h3 className="text-emerald-400 font-medium text-lg">
              {item.price === 0 ? "Free" : `$${item.price}`}
            </h3>
            {item.estimatedPrice && (
              <h5 className="ml-3 text-sm text-gray-400 line-through">
                ${item.estimatedPrice}
              </h5>
            )}
          </div>

          <div className="flex items-center">
            <AiOutlineUnorderedList size={20} className="text-emerald-400" />
            <h5 className="ml-2 text-gray-300 text-sm">
              {item.courseData?.length} Lectures
            </h5>
          </div>
        </div>

        <button className="w-full mt-3 py-2 text-lg font-Poppins font-semibold text-black cursor-pointer bg-emerald-400 rounded-md flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0px_0px_12px_#fedd4d]">
          <FaUserGraduate size={20} className="text-white" />
          Enroll Now
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
