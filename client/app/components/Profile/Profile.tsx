/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { FC, useEffect, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import { useGetUserAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { toast } from "react-toastify";
import CourseCard from "@/app/category/course/CourseCard";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const { data, isLoading } = useGetUserAllCoursesQuery(undefined, {});
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(1);
  const [logout, setLogout] = useState(false);
  const [courses, setCourses] = useState([]);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const logoutHandler = async () => {
    await signOut();
    setLogout(true);
    toast.success("Logout successfully! 💁‍♀️");
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  useEffect(() => {
    if (data) {
      const filteredCourses = user.courses
        .map((item: any) =>
          data?.courses.find((course: any) => course._id === item._id)
        )
        .filter((course: any) => course !== undefined);
      setCourses(filteredCourses);
    }
  }, [data, user]);

  return (
    <div className="w-[90%] flex mx-auto gap-10 pt-[4rem] container">
      <div
        className={`w-[70px] 800px:w-[390px] h-[465px] bg-[#fff] bg-opacity-90 border border-[#ffffff1f] rounded-[5px] shadow-sm mt-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        }`}
      >
        <SideBarProfile
          user={user}
          active={active}
          setActive={setActive}
          avatar={avatar}
          logoutHandler={logoutHandler}
        />
      </div>
      {active === 1 && (
        <div className="w-full h-full mt-[80px]">
          <ProfileInfo avatar={avatar} user={user} />
        </div>
      )}

      {active === 2 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ChangePassword />
        </div>
      )}

      {active === 3 && (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[100px]">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] 1500px:grid-cols-3 1500px:gap-[35px] mb-12 border-0">
            {courses &&
              courses.map((item: any, index: number) => (
                <CourseCard item={item} key={index} isProfile={true} />
              ))}
          </div>
          {courses.length === 0 && (
            <h1 className=" text-center text-[18px] font-Poppins">
              You don&apos;t have any purchased courses!
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
