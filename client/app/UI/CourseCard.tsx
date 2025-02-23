import React from "react";

interface CourseCardProps {
  cardData: {
    heading: string;
    description: string;
    level: string;
    lessonNumber: number;
  };
  currentCard: string;
  setCurrentCard: (heading: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  cardData,
  currentCard,
  setCurrentCard,
}) => {
  return (
    <div>
      <button
        className={`flex flex-col w-[330px] p-5 gap-1 ${
          currentCard === cardData.heading
            ? "bg-white text-black shadow-[12px_12px_0px] shadow-[#FFD60A]"
            : "bg-[#FFE29C] text-black"
        }`}
        onClick={() => setCurrentCard(cardData.heading)}
      >
        <div className="flex flex-col text-center p-2 border-b-2 border-dashed">
          <p
            className={`text-base sm:text-xl font-bold text-left mb-2 ${
              currentCard === cardData.heading
                ? "text-black"
                : "text-richblue-5"
            }`}
          >
            {cardData.heading}
          </p>
          <p className="text-left mb-6 text-sm sm:text-base">
            {cardData.description}
          </p>
        </div>
        <div className="flex justify-between w-full text-sm sm:text-base p-2 sm:p-3">
          <p>{cardData.level}</p>
          <p>{cardData.lessonNumber} Lessons</p>
        </div>
      </button>
    </div>
  );
};

export default CourseCard;
