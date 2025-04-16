"use client";

import CourseDetailsPage from "@/app/category/course/CourseDetailsPage";
import { useParams } from "next/navigation";
import React from "react";

// const Page = ({ params }: any) => {
const Page = () => {
  const params = useParams() ?? {};
  const courseId = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure it's a string

  return (
    <div className="container mx-auto">
      <CourseDetailsPage id={courseId as string} />
    </div>
  );
};

export default Page;
