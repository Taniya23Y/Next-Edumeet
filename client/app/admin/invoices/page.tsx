"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import AllInvoices from "../../../app/components/Admin/Order/AllInvoices";
import DashboardHeader from "@/app/components/Admin/dashboard/DashboardHeader";

const page = () => {
  return (
    <div>
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
          <DashboardHeader />
          <AllInvoices />
        </div>
      </div>
    </div>
  );
};

export default page;
