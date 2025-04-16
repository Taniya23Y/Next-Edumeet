import React from "react";
import CTAButton from "../../../UI/Btn";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

interface CodeBoxProps {
  position: string;
  heading: React.ReactNode;
  subheading: string;
  ctabtn1: {
    active: boolean;
    linkto: string;
    btnText: string;
  };
  ctabtn2: {
    active: boolean;
    linkto: string;
    btnText: string;
  };
  codeblock: string;
  backgroundGradient: string;
  codeColor: string;
}

const CodeBox: React.FC<CodeBoxProps> = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div
      className={`flex ${position} my-20 justify-between flex-col gap-10 pt-3`}
    >
      {/* Section 1 */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-gray-300 text-base font-normal w-[85%] -mt-3">
          {subheading}
        </div>

        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 */}
      <div className="glass h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        <div className="absolute gradient-custom w-[373px] h-[257px] rounded-full blur-2xl opacity-20 -left-2 -top-2"></div>

        <div className="text-center flex select-none flex-col w-[10%] text-yellow font-inter font-bold">
          {Array.from({ length: 11 }, (_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>

        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <div className={`${backgroundGradient}`}></div>
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBox;
