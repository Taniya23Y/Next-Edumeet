import CTAButton from "../../../UI/Btn";
import yellowImage from "../../../../public/images/yellowImage.png";
import purpleImage from "../../../../public/images/purpleImage.png";
import redImage from "../../../../public/images/redImage.png";
import greenImage from "../../../../public/images/greenImage.png";
import blueImage from "../../../../public/images/blueImage.png";
import grayGreenImage from "../../../../public/images/grayGreenImage.png";
import {
  FaArrowRight,
  FaLongArrowAltRight,
  FaPaperPlane,
  FaPencilRuler,
  FaVideo,
} from "react-icons/fa";

import Image from "next/image";
import HighlightText from "../../../UI/HighlightText";

interface CTAButtonProps {
  active: boolean;
  linkto: string;
  btnText: string;
}

interface SubHeroProps {
  ctabtn1: CTAButtonProps;
}

const SubHero: React.FC<SubHeroProps> = ({ ctabtn1 }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 lg:pt-0 lg:pb-32">
      {/* left partition */}
      <div className="left w-full lg:w-3/5 flex flex-col gap-6 lg:gap-8">
        {/* headings */}
        <div className="font-bold text-p3 text-3xl sm:text-4xl">
          <h1>Your Free Resources for Learning</h1>
          <h1 className="flex items-center pt-3 text-center mx-auto">
            <span>Path</span>
            <pre> </pre>
            <FaLongArrowAltRight className="w-[1.5rem] sm:w-[2rem]" />
            <pre> </pre>
            <HighlightText text={"EduMeet"} /> 🚀
          </h1>
        </div>

        {/* para text */}
        <div className="text-gray-300 text-sm sm:text-base font-normal w-full sm:w-[85%] -mt-2 sm:-mt-3">
          <p>
            EduMeet is a platform that aggregates free multimedia educational
            content from various online sources. It provides structured
            roadmaps, tailored assignments, and an intuitive interface, making
            learning accessible and efficient for users of all skill levels.
          </p>
        </div>

        {/* button */}
        <div className="w-40 sm:w-[10rem]">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>

        {/* category choice */}
        <div>
          <h1 className="font-semibold text-lg sm:text-xl">
            Choose Your Category:
          </h1>
          <div className="pt-3 text-sm sm:text-lg flex flex-wrap items-center gap-6 text-center">
            {/* Categories */}
            {[
              { name: "Documents", icon: <FaPaperPlane /> },
              { name: "Video", icon: <FaVideo /> },
              { name: "Tutorials", icon: <FaPencilRuler /> },
            ].map((category, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 sm:gap-4 items-center"
              >
                <p>{category.name}</p>
                <div className="bg-purple-300 rounded-full w-12 h-12 sm:w-[4rem] sm:h-[4rem] flex justify-center items-center">
                  {category.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right partition */}
      {/* <div className="hidden lg:flex flex-col gap-[0rem] pb-16">
        {[
          [yellowImage, purpleImage, redImage],
          [greenImage, blueImage, grayGreenImage],
        ].map((group, i) => (
          <div key={i} className="flex gap-6 pb-0">
            {group.map((img, index) => (
              <div
                key={index}
                className={`w-[8rem] ${i === 1 && index === 0 ? "pt-16" : ""} ${
                  i === 1 && index === 2 ? "pt-11" : ""
                } h-[${index === 1 ? "9rem" : "8rem"}]`}
              >
                <Image
                  src={img}
                  alt="students-images"
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div> */}

      <div className="hidden lg:flex flex-col gap-[13rem] pb-16">
        {/* 1 to 3 img */}
        <div className="flex gap-6 pb-7">
          <div className="w-[8rem] h-[5rem] rounded-full">
            <Image
              src={yellowImage}
              alt="students-images"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-[8rem] h-[9rem]">
            <Image
              src={purpleImage}
              alt="students-images"
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image
              src={redImage}
              alt="students-images"
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4 to 6 img */}
        <div className="flex gap-6">
          <div className="w-[8rem] h-[8rem] pt-16">
            <Image
              src={greenImage}
              alt="students-images"
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image
              src={blueImage}
              alt="students-images"
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-[8rem] h-[9rem] pt-11">
            <Image
              src={grayGreenImage}
              alt="students-images"
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
