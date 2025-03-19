import Link from "next/link";
import { useRef } from "react";
import Video from "./HomePage/Video";
import CodeBox from "./HomePage/CodeBox";
import HighlightText from "../../UI/HighlightText";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../../UI/Btn";
import Subscribe from "../../utils/Subscribe";
import Hero from "./HomePage/Hero";
import SubHero from "./HomePage/SubHero";
import UnlockBanner from "./HomePage/UnlockBanner";
import ProblemSolution from "./HomePage/ProblemSolution";
import RightCourse from "./HomePage/RightCourse";
import Faq from "./HomePage/Faq";
import Testimonial from "../Reviews/Testimonial";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the video section
  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container bg-[#0A0A0A] w-full h-full relative mx-auto flex flex-col items-center justify-between select-none">
      <Link href="/signup" />

      {/* Hero | section - 1  */}
      <div>
        <Hero onDemoClick={scrollToVideo} />
      </div>

      {/* Video | section - 2.1  */}
      <div ref={videoRef} className="pt-6">
        <Video />
      </div>

      {/* CodeBox | section - 3  */}
      <div className="px-5">
        <CodeBox
          position="lg:flex-row"
          heading={
            <div className="text-4xl font-semibold">
              Unlock your <HighlightText text="coding potential " /> With Free
              Online Courses 🪄
            </div>
          }
          subheading="Discover Your Coding Potential With Curated Collection Of Free Online Courses. Unlock New Skills And Opportunities On Your Journey To Mastery."
          ctabtn1={{
            btnText: "Try it yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{ btnText: "Learn More", linkto: "/login", active: false }}
          codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a></nav>\n</body>\n</html>`}
          codeColor="text-yellow-25"
          backgroundGradient="grad"
        />
      </div>

      {/* subHero | section - 4  */}
      <div className="md:pt-[3rem] px-5">
        <SubHero
          ctabtn1={{ btnText: "Start Now", linkto: "/login", active: true }}
        />
      </div>

      {/* code | section - 5 */}
      <div className="md:pt-[3rem] px-5">
        <CodeBox
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-4xl font-semibold">
              Begin your coding journey in seconds With
              <HighlightText text={"EduMeet"} /> 🚀
            </div>
          }
          subheading={
            "Experience hands on coding from day one with EduMeet. Explore curated Courses, Personalized learning paths, Roadmaps and a supportive community for a seamless coding journey."
          }
          ctabtn1={{
            btnText: "Try it yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false,
          }}
          codeblock={`const generateOTP = () => {\nconst digits = “0123456789”;\nconst length = 6;\n return Array.from({ length }, (_, i) => i + 1).\n reduce((initialValue) => {\n const randomIndex = Math.floor(Math.random\n()* digits.length);\n return (initialValue += digits[randomIndex]);\n}, “” );\n};\nconsole.log(generateOTP());`}
          codeColor={"text-yellow-25"}
          backgroundGradient={"grad"}
        />
      </div>

      {/* UnlockBanner | section - 6  */}
      <div className="md:pt-[3rem]">
        <UnlockBanner />
      </div>

      <div className="text-white">
        <div className="md:home_bg h-[270px] md:h-[250px] lg:h-[107px] rounded-xl">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="hidden lg:block h-[180px] md:h-14"></div>
            <div className="mt-0 lg:mt-0 flex flex-row gap-7 text-white">
              <CTAButton active linkto="/signup">
                <div className="flex items-center gap-3">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto="/signup">
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="container mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-col lg:flex-row justify-between gap-5 mb-10 -mt-20 lg:mt-[95px]">
            <div className="text-4xl font-semibold lg:w-[45%]">
              Get the Skills you need for a{" "}
              <HighlightText text="Job that is in demand" />
            </div>
            <div className="flex flex-col gap-10 lg:w-[40%] items-start">
              <div className="text-[16px]">
                The modern Edumeet dictates its own terms. Today, to be a
                competitive specialist requires more than professional skills.
              </div>
              <CTAButton active linkto="/signup">
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* ProblemSolution | section - 7 */}
      <div className="w-11/12 pt-[7rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8">
        <ProblemSolution />
      </div>

      {/* RightCourse | section - 8  */}
      <div className="w-11/12 pt-[2rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8">
        <RightCourse />
      </div>

      {/* TestimonialReview | section - 9  */}
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

      {/* FAQ | section - 10  */}
      <div className="w-11/12 pt-[4rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-0">
          <HighlightText text="Discover More with Our FAQ Section" />
        </h2>
      </div>

      <div className="px-2 md:px-10">
        <Faq />
      </div>

      {/* Subscribe | section - 11  */}
      <div className="w-11/12 pt-[1rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10">
          <HighlightText text="Subscribe to Newsletter ✨" />
        </h2>
        <div className="pt-4">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Home;
