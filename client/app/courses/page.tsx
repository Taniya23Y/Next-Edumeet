/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetUserAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import PaginationComponent from "./PaginationComponent";
import LoaderOne from "../components/Loader/LoaderOne";
import { styles } from "../styles/style";
import CourseCard from "../category/course/CourseCard";
import Footer from "../utils/Footer";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Page = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const { data, isLoading } = useGetUserAllCoursesQuery(undefined, {});
  const { data: categoryData } = useGetHeroDataQuery("Categories", {});
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const resultPerPage = 4;

  useEffect(() => {
    if (category === "All") {
      setCourses(data?.courses);
    }

    if (category !== "All") {
      // setCourses(
      //   data?.courses.filter((item: any) => item.categories === category)
      // );
      setCourses(
        data?.courses.filter((item: any) => {
          const itemCategories = item.categories
            ?.split(",")
            .map((cat: string) => cat.trim());
          return itemCategories?.includes(category);
        })
      );
    }

    if (search) {
      setCourses(
        data?.courses.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [data, category, search]);

  const categories = categoryData?.layout.categories;

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoaderOne />
      ) : (
        <>
          <Heading
            title="All Courses Edumeet"
            description="EduMeet organizes structured coding courses from YouTube and other resources, providing clear roadmaps and tailored assignments for efficient learning. 🚀"
            keywords="Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development"
          />
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
          />

          <div className="w-[95%] mt-[100px] 800px:w-[85%] m-auto min-h-screen h-auto">
            {/* Category slider with arrows */}
            <div className="relative flex items-center gap-5">
              <button
                className="absolute left-0 z-10 p-2 text-black bg-white rounded-full shadow-md"
                onClick={() => scroll(-150)}
              >
                <ChevronLeft size={20} />
              </button>

              <div
                ref={scrollRef}
                className="w-full ml-2 mr-2 overflow-x-auto scrollbar-none whitespace-nowrap py-2 px-8"
              >
                <div className="inline-flex space-x-3">
                  <div
                    className={`h-[35px]  ${
                      category === "All"
                        ? "bg-[crimson] text-white"
                        : "bg-[#C691FC] text-black"
                    } px-3 rounded-[30px] flex items-center justify-center font-Josefin cursor-pointer`}
                    onClick={() => setCategory("All")}
                  >
                    All
                  </div>

                  {Array.isArray(categories) &&
                    categories.map((item: any, index: number) => (
                      <div
                        key={index}
                        className={`h-[35px]  ${
                          category === item.title
                            ? "bg-[crimson] text-white"
                            : "bg-[#C691FC] text-black"
                        } px-3 rounded-[30px] flex items-center justify-center font-Josefin cursor-pointer`}
                        onClick={() => setCategory(item.title)}
                      >
                        {item?.title}
                      </div>
                    ))}
                </div>
              </div>

              <button
                className="absolute  text-black right-0 z-10 p-2 bg-white rounded-full shadow-md"
                onClick={() => scroll(150)}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* No Courses Found Message */}
            {courses && courses.length === 0 && (
              <p
                className={`${styles.label} justify-center min-h-[50vh] flex items-center`}
              >
                {search
                  ? "No courses found!"
                  : "No courses found in this category. Please try another one!"}
              </p>
            )}

            <br />
            <br />
            <div className="grid justify-items-center grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
              {courses &&
                courses
                  .slice(startIndex, startIndex + resultPerPage)
                  .map((item: any, index: number) => (
                    <CourseCard item={item} key={index} />
                  ))}
            </div>

            {/* Pagination */}
            {Array.isArray(courses) && courses.length > 0 && (
              <PaginationComponent
                itemArray={courses}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
                resultPerPage={resultPerPage}
              />
            )}
          </div>
          <br />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
