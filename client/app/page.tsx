"use client";

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <>
      <Heading
        title="Edumeet"
        description="Edumeet is a platform that provides structured coding courses from YouTube and other platforms, offering roadmaps, assignments, and hands-on projects to help learners master programming skills efficiently."
        keywords="Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development"
      />
      <div>
        <h1>Welcome to EduMeet</h1>
      </div>
    </>
  );
};

export default Page;
