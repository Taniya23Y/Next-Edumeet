"use client";
import DashboardHero from "../../components/Admin/dashboard/DashboardHero";
import AdminProtected from "../../hooks/adminProtected";
import Heading from "../../utils/Heading";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import React from "react";
import AllUsers from "@/app/components/Admin/Users/AllUsers";

const page = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Edumeet | Admin"
          description="EduMeet organizes structured coding courses from YouTube and other resources, providing clear roadmaps and tailored assignments for efficient learning. 🚀"
          keywords="Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development"
        />
        <div className="flex min-h-screen h-auto">
          <div className="w-1/5 1500px:w-[16%] z-[99999]">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllUsers isTeam={false} />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
