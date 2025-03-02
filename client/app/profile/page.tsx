/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { FC, useEffect, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";
import Footer from "../utils/Footer";

const Page: FC = () => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");

  const { user } = useSelector((state: any) => state.auth);

  // Set document title dynamically
  useEffect(() => {
    if (user?.name) {
      document.title = `${user.name} Profile`;
    } else {
      document.title = "Profile";
    }
  }, [user]);

  return (
    <div>
      <Protected>
        <Heading
          title={`${user?.name} profile`}
          description="EduMeet organizes structured coding courses from YouTube and other resources, providing clear roadmaps and tailored assignments for efficient learning. 🚀"
          keywords="Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development"
        />
        <Header
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
        <div className="pt-7">
          <Footer />
        </div>
      </Protected>
    </div>
  );
};

export default Page;
