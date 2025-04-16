"use client";
import React, { useState } from "react";
import Courses from "./course/courses";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../utils/Footer";
import HighlightText from "../UI/HighlightText";
import Testimonial from "../components/Reviews/Testimonial";
import Subscribe from "../utils/Subscribe";
import NewFAQ from "../utils/NewFAQ";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <div className="container bg-[#0A0A0A] w-full h-full relative mx-auto flex flex-col items-center justify-between select-none">
        <Heading
          title="Category | Edumeet"
          description="EduMeet organizes structured coding courses from YouTube and other resources, providing clear roadmaps and tailored assignments for efficient learning. 🚀"
          keywords="Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development"
        />
        <Header
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          route={route}
        />
        <div className="pt-[6rem]">
          <Courses />
        </div>

        {/* Testimonial Section */}
        <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
          <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
            <HighlightText text="User Testimonials" />
          </h2>
          <div className="flex items-center justify-center flex-col gap-4 mb-10">
            <h1 className="text-3xl font-bold pt-5">What our users say</h1>
            <p className="w-[70%] text-lg font-Josefin_Sans text-center text-purple-200">
              Explore inspiration and valuable insights from our students latest
              reviews. Their success stories showcase the transformation impact
              of learning and growing with Edumeet.
            </p>
          </div>

          <Testimonial />
        </div>

        {/* NewFAQ Section */}
        <div className="w-11/12 pt-[4rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
          <h2 className="text-center text-4xl font-semibold mt-0">
            <HighlightText text="Discover More with Our FAQ Section" />
          </h2>
          <div className="flex items-center justify-center flex-col gap-2">
            <h3 className="text-3xl max-md:h5 max-w-640 max-lg:max-w-md mb-4 text-white font-bold text-center pt-6">
              Curiosity didn&apos;t kill the cat, it gave it answers.
            </h3>
            <p className="text-xl max-lg:max-w-sm text-purple-300">
              You&apos;ve got questions, we&apos;ve got answers.
            </p>
          </div>
        </div>
        <NewFAQ />

        {/* Subscribe Section */}
        <div className="w-11/12 pt-[1rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
          <h2 className="text-center text-4xl font-semibold mt-10">
            <HighlightText text="Subscribe to Newsletter ✨" />
          </h2>
          <div className="pt-4">
            <Subscribe />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
