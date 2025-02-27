/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const CourseOptions: FC<Props> = ({ active, setActive }) => {
  const options = [
    "Course Information",
    "Course Options",
    "Course Content",
    "Course Preview",
  ];

  return (
    <div>
      {options.map((option: any, index: number) => (
        <div key={index} className="w-full flex py-4">
          {/* Circle with Checkmark */}
          <div
            className={`w-[28px] h-[28px] rounded-full flex items-center justify-center ${
              active >= index ? "bg-[#e1ce50] text-black" : "bg-[#8d8b82]"
            } relative`}
          >
            <IoMdCheckmark className="text-[23px]" />
            {/* Vertical Line (Only if not last item) */}
            {index !== options.length - 1 && (
              <div
                className={`absolute h-[28px] w-1 ${
                  active >= index ? "bg-[#e1ce50] text-black" : "bg-[#c5c2af]"
                } bottom-[-100%]`}
              ></div>
            )}
          </div>
          {/* Option Text */}
          <h5 className="pl-3 text-white text-[18px]">{option}</h5>
        </div>
      ))}
    </div>
  );
};

export default CourseOptions;
