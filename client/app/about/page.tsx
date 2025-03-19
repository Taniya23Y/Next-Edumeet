"use client";

import React, { useState } from "react";
import About from "../components/Route/About";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../utils/Footer";

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
      <About />
      <Footer />
    </div>
  );
};

export default Page;
