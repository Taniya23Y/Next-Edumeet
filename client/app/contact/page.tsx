"use client";

import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../utils/Footer";
import ContactUs from "../components/Route/ContactUs";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="ContactUs | Edumeet"
        description="EduMeet organizes structured coding courses from YouTube and other resources, providing clear roadmaps and tailored assignments for efficient learning. 🚀"
        keywords="Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development"
      />
      <Header open={open} setOpen={setOpen} setRoute={setRoute} route={route} />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;
