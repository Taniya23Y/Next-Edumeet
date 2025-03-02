/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import CoursePlayer from "../../../utils/CoursePlayer";
import { styles } from "@/app/styles/style";
import Ratings from "../../../utils/Ratings";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: any;
  isEdit?: boolean;
};

const CoursePreview: FC<Props> = ({
  active,
  setActive,
  courseData,
  handleCourseCreate,
  isEdit,
}) => {
  const discountPercentage =
    ((courseData?.estimatedPrice - courseData?.price) /
      courseData?.estimatedPrice) *
    100;
  const discountPercentagePrice = discountPercentage.toFixed(0);

  const prevButton = () => {
    setActive(active - 1);
  };
  const createCourse = () => {
    handleCourseCreate();
  };

  return (
    <div className="w-[90%] m-auto py-2 mb-5">
      <div className="w-full relative">
        <div className="w-full mt-1">
          <CoursePlayer
            videoUrl={courseData?.demoUrl}
            title={courseData?.title}
          />
        </div>

        <div className="flex items-center">
          <h1 className="pt-5 text-[25px]">
            {courseData?.price === 0 ? "Free" : courseData?.price + "$"}
          </h1>
          <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80">
            {courseData?.estimatedPrice}$
          </h5>

          <h4 className="pl-5 pt-4 text-[22px]">
            {discountPercentagePrice}% Off
          </h4>
        </div>

        {/* but now button  */}
        <div className="flex items-center">
          <div
            className={`${styles.btnOnly} !w-[180px] my-3 font-Poppins !bg-[crimson] cursor-not-allowed`}
          >
            Buy Now ${courseData?.price}
          </div>
        </div>

        <div className="flex items-center justify-start">
          <input
            type="text"
            name=""
            id=""
            placeholder="Discount code..."
            className={`${styles.inputs} 1500px:!w-[40%] 1100px:w-[60%] ml-3 !mt-0`}
          />
          <div
            className={`bg-purple-400 rounded-md text-center font-bold text-[20px] p-2 !w-[30%] my-3 ml-4 mr-4 font-Poppins cursor-pointer`}
          >
            Apply
          </div>
        </div>

        <p className="pb-1">🛠️ Source code included!</p>
        <p className="pb-1">🛠️ Full lifetime access!</p>
        <p className="pb-1">🛠️ Certificate of completion if have!</p>
        <p className="pb-3 800px:pb-1">🛠️ Premium Support!</p>
      </div>

      <div className="w-full">
        <div className="w-full 800px:pr-5">
          <h1 className="text-[25px] font-Poppins justify-between pt-3">
            {courseData?.name}
          </h1>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center">
              <Ratings rating={0} />
              <h5>0 Reviews</h5>
            </div>
            <h5>0 Students</h5>
          </div>
          <br />
          <h1 className="text-[25px] font-Poppins font-[600]">
            What you will learn from this course?
          </h1>
        </div>
        {courseData?.benefits?.map((item: any, index: number) => (
          <div key={index} className="w-full flex items-center py-2">
            {/* <div className="w-[15px] mr-1">
              <IoCheckmarkDoneCircleOutline size={20} color={"green"} />
            </div> */}
            <p className="pl-2">✅ {item.title}</p>
          </div>
        ))}
        <br />
        <br />
        <h1 className="text-[25px] font-Poppins font-[600]">
          What are the prerequisites for starting this course ?
        </h1>
        {courseData?.prerequisites?.map((item: any, index: number) => (
          <div className="w-full flex items-center py-2" key={index}>
            {/* <div className="w-[15px] mr-1">
              <IoMdCheckboxOutline size={20} color={"green"} />
            </div> */}
            <p className="pl-2">✔️ {item.title}</p>
          </div>
        ))}
        <br />
        <br />
        {/* course description */}
        <div className="w-full">
          <h1 className="text-[25px] font-Poppins font-[600]">
            Course Details
          </h1>
          <p className="text-[18px] text-justify  mt-[20px] pr-[50px]">
            {courseData?.description}
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="w-full flex items-center justify-between pr-[30px] ">
        <div onClick={() => prevButton()}>
          <button className="Btn flex items-center justify-start w-[45px] h-[45px] border-none border-[50%] rounded-full cursor-pointer relative overflow-hidden transition-[0.3s] shadow-(2px 2px 10px rgba(0, 0, 0, 0.199)) bg-emerald-400 hover:w-[125px] hover:transition-[0.3s]">
            <div className="sign w-[100%] flex items-center justify-center transition-[0.3s]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                unicode="uF135"
                className="bi bi-arrow-right-short text-[120px] font-bold"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </div>

            <div className="text absolute right-0 w-[0%] opacity-0 text-black text-[1.2rem] font-medium transition-[0.3s] ">
              Prev
            </div>
          </button>
        </div>
        <div onClick={() => createCourse()}>
          <button className="Btn flex items-center justify-start w-[45px] h-[45px] border-none border-[50%] rounded-full cursor-pointer relative overflow-hidden transition-[0.3s] shadow-(2px 2px 10px rgba(0, 0, 0, 0.199)) bg-emerald-400 hover:w-[125px] hover:transition-[0.3s]">
            <div className="text absolute right-0 w-[0%] opacity-0 text-black text-[1.2rem] font-medium transition-[0.3s] ">
              {isEdit ? "Update" : "Create"}
            </div>
            <div className="sign w-[100%] flex items-center justify-center transition-[0.3s]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                unicode="uF135"
                className="bi bi-arrow-right-short text-[120px] font-bold"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
