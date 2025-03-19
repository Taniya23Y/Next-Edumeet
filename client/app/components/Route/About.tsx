"use client";

import { useRef } from "react";
import HighlightText from "../../UI/HighlightText";
import Subscribe from "../../utils/Subscribe";
import HeroAbout from "./AboutPage/HeroAbout";
import ImageAbout from "./AboutPage/ImageAbout";
import StepsAbout from "./AboutPage/StepsAbout";
import Vision from "./AboutPage/Vision";
import Faq from "./HomePage/Faq";
import Testimonial from "../Reviews/Testimonial";

const About: React.FC = () => {
  const ImageHeroRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="container w-screen min-h-screen relative mx-auto flex flex-col items-center justify-between">
      {/* About Heading | Section - 1 */}
      <div className="pt-[7rem] px-4 md:px-9">
        <HeroAbout
          ctabtn1={{
            btnText: "Need Help",
            linkto: "/login",
            active: false,
          }}
        />
      </div>

      {/* Image | section - 2  */}
      <div ref={ImageHeroRef} className="pt-5">
        <ImageAbout />
      </div>

      {/* Steps for Edumeet | Section - 2.1 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-[10rem] md:pt-[23rem]">
          <HighlightText text="Steps for edumeet" />
        </h2>
        <StepsAbout />
      </div>

      {/* Edumeet Vision | Section - 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text="Edumeet Vision" />
        </h2>
        <Vision />
      </div>

      {/* User Testimonials | Section - 4 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-1">
          <HighlightText text="User Testimonials" />
        </h2>
        <div className="flex items-center justify-center flex-col gap-4 mb-10">
          <h1 className="text-3xl font-bold pt-5">What our users say</h1>
          <p className="w-[70%] text-lg font-Josefin_Sans text-center text-purple-200">
            Explore inspiration and valuable insights from our students latest
            reviews. Their success stories showcase the transformation impact of
            learning and growing with Edumeet.
          </p>
        </div>

        <Testimonial />
      </div>

      {/* FAQ | Section - 5 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-12 pt-12">
          <HighlightText text="Discover More with Our FAQ Section" />
        </h2>
      </div>

      <div className="px-2 md:px-10">
        <Faq />
      </div>

      {/* Subscribe | Section - 6 */}
      <div className="w-11/12 pt-[1rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 ">
          <HighlightText text="Subscribe to Newsletter ✨" />
        </h2>
        <div className="pt-4">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default About;
