/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { useGetUserAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import HighlightText from "../../UI/HighlightText";
import LoaderOne from "@/app/components/Loader/LoaderOne";

const Courses = () => {
  const { data, isLoading } = useGetUserAllCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    setCourses(data?.courses);
  }, [data]);
  console.log("Fetched courses data:", data);

  return (
    <div>
      <div className={`w-[90%] 800px:w-[80%] m-auto`}>
        <h1 className="text-center font-Inter text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] text-[#000] font-[700] tracking-tight">
          Expand Your <HighlightText text="Career Opportunity" />
          <br />
          With Edumeet Curated Courses
        </h1>
        <br />
        <br />

        <div className="min-h-[50vh] flex items-center justify-center">
          {isLoading ? (
            <LoaderOne />
          ) : (
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
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
