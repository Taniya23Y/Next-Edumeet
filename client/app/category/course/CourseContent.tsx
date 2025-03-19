/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import React, { useState } from "react";
import Heading from "@/app/utils/Heading";
import LoaderOne from "@/app/components/Loader/LoaderOne";
import Header from "@/app/components/Header";
import CourseContentList from "./CourseContentList";
import CourseContentMedia from "./CourseContentMedia";

type Props = {
  id: string;
  user: any;
};

const CourseContent = ({ id, user }: Props) => {
  const {
    data: contentData,
    isLoading,
    refetch,
  } = useGetCourseContentQuery(id, { refetchOnMountOrArgChange: true });
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const data = contentData?.content;

  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <LoaderOne />
      ) : (
        <>
          <Header
            open={open}
            setOpen={setOpen}
            route={route}
            setRoute={setRoute}
          />
          <div className="w-full grid 800px:grid-cols-10">
            <Heading
              title={data[activeVideo]?.title}
              description="anything"
              keywords={data[activeVideo]?.tags}
            />
            <div className="col-span-7">
              <CourseContentMedia
                data={data}
                id={id}
                activeVideo={activeVideo}
                setActiveVideo={setActiveVideo}
                user={user}
                refetch={refetch}
              />
            </div>
            <div className="hidden 800px:block 800px:col-span-3">
              <CourseContentList
                setActiveVideo={setActiveVideo}
                data={data}
                activeVideo={activeVideo}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseContent;
