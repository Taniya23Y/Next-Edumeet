"use client";
import React, { useState } from "react";
import Courses from "./course/courses";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../utils/Footer";
import HighlightText from "../UI/HighlightText";
import Testimonial from "../components/Reviews/Testimonial";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="About | Edumeet"
        description="EduMeet organizes structured coding courses from YouTube and other resources, providing clear roadmaps and tailored assignments for efficient learning. 🚀"
        keywords="Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development"
      />
      <Header open={open} setOpen={setOpen} setRoute={setRoute} route={route} />
      <div className="pt-[6rem]">
        <Courses />
      </div>

      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text="User Testimonials" />
        </h2>
        <div className="flex items-center justify-center flex-col gap-4 mb-10">
          <h1 className="text-3xl font-bold pt-5">What our users say</h1>
          <p className="w-[70%] text-lg font-Josefin_Sans text-center text-purple-200">
            Explore inspiration and valuable insights from our students latest
            reviews. Their success stories showcase the transformation impact of
            learning and growing with Edumeet.
          </p>
        </div>

        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
