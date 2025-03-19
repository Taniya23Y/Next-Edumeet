/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { useGetUserAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import HighlightText from "../../UI/HighlightText";
import LoaderOne from "@/app/components/Loader/LoaderOne";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Courses = () => {
  const { data, isLoading } = useGetUserAllCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCourses(data?.courses);
  }, [data]);

  const handleSearch = () => {
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };

  return (
    <div>
      <div className={`w-[90%] 800px:w-[80%] m-auto`}>
        <div className="text-center">
          <h1 className="text-[31px] md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            <HighlightText text="Expand Your Career Horizons" />
            <br />
            With <HighlightText text="Edumeet's Best Courses" />
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Gain in-demand skills with handpicked courses to boost your career
            growth.
          </p>
          <br />

          <div className="flex justify-center w-full mt-3">
            <div className="relative flex w-full max-w-lg">
              <input
                type="search"
                placeholder="Search Courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 px-4 pr-12 text-lg font-medium border rounded-md shadow-sm outline-none focus:border-[#9788d7] focus:ring-2 focus:ring-[#9788d7] bg-black text-white border-gray-600 placeholder-gray-400 transition-all"
              />
              <button
                onClick={handleSearch}
                className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 text-white bg-[#9788d7] rounded-md hover:bg-[#8c78e8] transition-all"
              >
                <BiSearch size={24} />
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="flex  justify-center">
          {isLoading ? (
            <LoaderOne />
          ) : (
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[6rem] lg:grid-cols-3 lg:gap-[7rem] 1500px:grid-cols-4 1500px:gap-[21rem] mb-12 border-0">
              {courses &&
                courses.map((item: any, index: number) => (
                  <CourseCard item={item} key={index} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
