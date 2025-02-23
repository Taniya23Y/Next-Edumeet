/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import { unlockBannerPart } from "../../../Helper/data/unlockbanner-part";
import HighlightText from "../../../UI/HighlightText";
import CourseCard from "../../../UI/CourseCard";

// Define types for course data
interface Course {
  heading: string;
  description: string;
  image: string;
  link: string;
  level: string;
  lessonNumber: number;
}

interface UnlockBannerPart {
  tag: string;
  courses: Course[];
}

// Define tabs
const tabsName: string[] = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const UnlockBanner: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>(tabsName[0]);
  // const [courses, setCourses] = useState<Course[]>(unlockBannerPart[0].courses);
  const [courses, setCourses] = useState<Course[]>(
    () => unlockBannerPart[0].courses as Course[]
  );

  const [currentCard, setCurrentCard] = useState<string>(
    unlockBannerPart[0].courses[0].heading
  );

  const setMyCards = (value: string) => {
    setCurrentTab(value);
    const result = unlockBannerPart.find((course) => course.tag === value);
    if (result) {
      // setCourses(result.courses);
      setCourses(result.courses as Course[]);
      setCurrentCard(result.courses[0].heading);
    }
  };

  return (
    <div className="pb-10 sm:pb-3 px-4">
      {/* Heading */}
      <div className="text-3xl font-semibold text-center lg:text-4xl">
        Unlock the <HighlightText text={"Power of Code"} />
      </div>

      <p className="text-center text-[#f2d6ad] text-[16px] sm:text-[18px] mt-4">
        Learn to build anything you can imagine
      </p>

      {/* Tabs Section */}
      <div className="mt-5 flex flex-wrap justify-center rounded-full bg-[#C084FC] mb-3 border border-blue-950 px-2 py-2 gap-2">
        {tabsName.map((element, index) => (
          <div
            key={index}
            className={`text-sm sm:text-base lg:text-lg flex items-center gap-3 text-black
              ${
                currentTab === element
                  ? "bg-black text-yellow font-medium"
                  : "text-black"
              } rounded-full transition-all duration-200 cursor-pointer
              hover:bg-black-100 hover:text-yellow text-center px-3 py-0 lg:px-6 lg:py-2`}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      {/* Course Cards Section */}
      <div className="flex flex-wrap gap-9 justify-center mt-5">
        {courses.map((element, index) => (
          <CourseCard
            key={index}
            cardData={element}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  );
};

export default UnlockBanner;
