import Button from "../../../UI/Btn";
import aboutImage1 from "../../../../public/images/aboutImage1.jpg";
import aboutImage2 from "../../../../public/images/aboutImage2.jpg";
import aboutImage3 from "../../../../public/images/aboutImage3.jpg";
import aboutImage4 from "../../../../public/images/aboutImage4.jpg";
import aboutImage5 from "../../../../public/images/aboutImage5.jpg";
import aboutImage6 from "../../../../public/images/aboutImage6.jpg";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import HighlightText from "../../../UI/HighlightText";

interface CTAButton {
  btnText: string;
  linkto: string;
  active: boolean;
}

interface HeroAboutProps {
  ctabtn1: CTAButton;
}

const HeroAbout: React.FC<HeroAboutProps> = ({ ctabtn1 }) => {
  const images = [
    { src: aboutImage1, alt: "Inspiring classroom environment" },
    { src: aboutImage2, alt: "Collaborative learning session" },
    { src: aboutImage3, alt: "Interactive workshop in progress" },
    { src: aboutImage4, alt: "Hands-on project activity" },
    { src: aboutImage5, alt: "Community discussion group" },
    { src: aboutImage6, alt: "Virtual learning session" },
  ];

  return (
    <div className="w-full relative flex justify-center pt-[2rem]">
      <div
        className="w-full max-w-7xl relative about about-bg rounded-xl shadow-2xl backdrop-blur-lg bg-opacity-80"
        style={{
          background:
            "linear-gradient(129.77deg, #8a2be2 -6.46%, #ffa500 60.04%, #f8f8ff 124.53%)",
          transform: "translateY(-40px)",
        }}
      >
        <div className="w-full bg-black/80 relative py-20 rounded-lg shadow-lg backdrop-blur-md">
          {/* Content Section */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
              <h1 className="text-white text-6xl font-bold">
                We Help People With their <br />
                <HighlightText text={"Right course "} />
              </h1>
              <p className="text-gray-300 font-light">
                &ldquo;At EduMeet, learners connect to unlock endless
                possibilities with tailored courses, hands-on projects, and a
                supportive community.&ldquo;
              </p>
              <div className="w-40 sm:w-[10rem]">
                <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
                  <div className="flex gap-2 items-center transition-transform duration-300 hover:scale-105">
                    {ctabtn1.btnText}
                    <FaArrowRight />
                  </div>
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 grid grid-cols-3 gap-6 relative">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-0 ${
                    index % 2 === 0 ? "rotate-3" : "-rotate-3"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
