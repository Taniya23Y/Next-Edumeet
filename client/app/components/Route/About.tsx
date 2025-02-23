import HighlightText from "../../UI/HighlightText";
import Subscribe from "../../utils/Subscribe";
import HeroAbout from "./AboutPage/HeroAbout";
import StepsAbout from "./AboutPage/StepsAbout";
import Vision from "./AboutPage/Vision";
import Faq from "./HomePage/Faq";

const About: React.FC = () => {
  return (
    <div className="container w-screen min-h-screen relative mx-auto flex flex-col items-center justify-between">
      {/* About Heading | Section - 1 */}
      <div className="pt-[7rem]">
        <HeroAbout
          ctabtn1={{
            btnText: "Need Help",
            linkto: "/login",
            active: false,
          }}
        />
      </div>

      {/* Steps for Edumeet | Section - 2 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text="Steps for edumeet" />
        </h2>
        <StepsAbout />
      </div>

      {/* Edumeet Vision | Section - 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text="Edumeet Vision" />
        </h2>
        <Vision />
      </div>

      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-12 pt-12">
          <HighlightText text="Discover More with Our FAQ Section" />
        </h2>
      </div>

      {/* FAQ | Section - 4 */}
      <Faq />

      {/* User Testimonials | Section - 5 */}
      {/* <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text="User Testimonial" />
        </h2>
        <TestimonialReview />
      </div> */}

      <div className="w-11/12 pt-[4rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
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
