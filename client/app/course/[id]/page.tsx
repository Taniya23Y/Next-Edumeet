/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CourseDetailsPage from "@/app/category/course/CourseDetailsPage";
import React from "react";

const Page = ({ params }: any) => {
  return (
    <div className="container mx-auto">
      <CourseDetailsPage id={params.id} />
    </div>
  );
};

export default Page;
