import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
import OnlineStudyImg from "../../../../public/images/Online_study.png";
import { ReactNode } from "react";
import Image from "next/image";
import HighlightText from "../../../UI/HighlightText";

interface FeatureCardProps {
  icon: ReactNode;
  iconColor: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconColor,
  title,
  description,
}) => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-4 flex gap-6 items-start">
      <div
        className={`bg-[#3B3B3D] rounded-tl-2xl rounded-br-2xl p-3 w-12 h-12 flex items-center justify-center ${iconColor}`}
      >
        {icon}
      </div>
      <div>
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const RightCourse: React.FC = () => {
  return (
    <section className="mt-[130px] mb-32 select-none">
      <div className="flex flex-col gap-6 items-center text-center">
        {/* Heading Section */}
        <h1 className="text-4xl font-semibold">
          Your Swiss Knife for
          <HighlightText text={" learning any language"} />
        </h1>
        <p className="text-richblack-600 mx-auto text-base font-medium w-[70%]">
          Using spin makes learning multiple languages easy. With 20+ languages,
          realistic voice-over, progress tracking, custom schedules, and more.
        </p>

        {/* Image and Features Section */}
        <div className="w-full bg-[#131313] flex flex-col lg:flex-row items-center justify-between mt-10 p-10 rounded-3xl">
          {/* Left Side - Image with Glassmorphism */}
          <div className="relative w-full lg:w-[26rem] h-[25rem] lg:h-[25rem]">
            {[
              {
                text: "Easy access to materials",
                style: "top-[-30px] left-[-50px]",
              },
              {
                text: "Interactive exercises",
                style: "bottom-[20px] right-[-50px]",
              },
              {
                text: "Progress tracking",
                style: "bottom-[-40px] left-[30px]",
              },
            ].map(({ text, style }, index) => (
              <div
                key={index}
                className={`absolute ${style} bg-white/20 backdrop-blur-md shadow-lg rounded-xl p-4`}
              >
                <p className="text-sm text-white">{text}</p>
              </div>
            ))}
            <div className="bg-[#E6B920] w-full h-full rounded-lg">
              <Image
                src={OnlineStudyImg}
                alt="Online Study Illustration"
                className="object-contain w-full h-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="flex flex-col gap-6 lg:ml-10 mt-10 lg:mt-0 text-left ">
            <div className="relative">
              <div className="grad "></div>
            </div>
            <h1 className="font-bold text-2xl">Find Your Right Course!</h1>
            <p className="opacity-70 font-mono pb-4">
              Discover the perfect course tailored to your goals with
              expert-curated recommendations.
            </p>
            <FeatureCard
              icon={<FaBookOpen />}
              iconColor="text-[#2DAE76]"
              title="Wide Range of Courses"
              description="Explore courses designed by experts across multiple domains. Find the perfect course that matches your learning style and goals."
            />
            <FeatureCard
              icon={<FaGraduationCap />}
              iconColor="text-[#E6B920]"
              title="Hands-On Learning"
              description="Enhance your skills through real-world projects and interactive exercises, ensuring practical experience alongside theoretical knowledge."
            />
          </div>
          <div className="relative">
            <div className="grad "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightCourse;
