import { FC } from "react";

interface CardBoxProps {
  name: string;
  desc: string;
  img: React.ElementType;
}

const CardBox: FC<CardBoxProps> = ({ name, desc, img: Icon }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-1 rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-64 space-y-3 overflow-hidden">
      <div className="text-center px-[3rem] py-5 rounded-xl w-full h-full border-2 border-gray-500 hover:border-white">
        {/* Icon Container */}
        <div className="relative flex items-center justify-center">
          {/* Soft Gradient Below the Icon */}
          <div className="absolute -bottom-2 w-20 h-6 rounded-full blur-xl"></div>

          {/* Icon Box with Glass Effect */}
          <div className="p-4 glass rounded-full flex items-center justify-center border border-gray-500 bg-opacity-40 backdrop-blur-lg">
            <Icon className="text-4xl text-[#FDDD62]" />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-[#F9A8D4] pt-1">{name}</h3>

        {/* Description */}
        <p className="text-center pt-1 text-sm text-gray-200">{desc}</p>
      </div>
    </div>
  );
};

export default CardBox;
