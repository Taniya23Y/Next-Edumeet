/* eslint-disable @typescript-eslint/no-explicit-any */
import { styles } from "@/app/styles/style";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { IoMdAddCircle } from "react-icons/io";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handlePrerequisitesChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);
  };

  const handleAddPrerequisites = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const previousButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields for go to next!");
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 block p-6 bg-black rounded-lg shadow-lg">
      <div className="bg-[#1a1a1a] rounded-lg p-6">
        <div>
          <label className={`${styles.label} text-[20px]`} htmlFor="email">
            What are the benefits for students in this course?
          </label>
          <br />
          {benefits.map((benefit: any, index: number) => (
            <input
              type="text"
              key={index}
              name="benefit"
              placeholder="You will be able to built a full stack Project!"
              required
              className={`${styles.inputs} my-2 !rounded-md bg-[#101010] `}
              value={benefit.title}
              onChange={(e) => handleBenefitChange(index, e.target.value)}
            />
          ))}
          <IoMdAddCircle
            className="text-blue-400 cursor-pointer hover:text-blue-500 "
            style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
            onClick={handleAddBenefit}
          />
        </div>

        <div>
          <label className={`${styles.label} text-[20px]`} htmlFor="email">
            What are the prerequisites for students in this course?
          </label>
          <br />
          {prerequisites.map((prerequisites: any, index: number) => (
            <input
              type="text"
              key={index}
              name="prerequisites"
              placeholder="You need prerequisites for this course!"
              required
              className={`${styles.inputs} my-2 !rounded-md bg-[#101010]`}
              value={prerequisites.title}
              onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
            />
          ))}
          <IoMdAddCircle
            className="text-blue-400 cursor-pointer hover:text-blue-500 "
            style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
            onClick={handleAddPrerequisites}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div onClick={() => previousButton()}>
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
        <div onClick={() => handleOptions()}>
          <button className="Btn flex items-center justify-start w-[45px] h-[45px] border-none border-[50%] rounded-full cursor-pointer relative overflow-hidden transition-[0.3s] shadow-(2px 2px 10px rgba(0, 0, 0, 0.199)) bg-emerald-400 hover:w-[125px] hover:transition-[0.3s]">
            <div className="text absolute right-0 w-[0%] opacity-0 text-black text-[1.2rem] font-medium transition-[0.3s] ">
              Next
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

export default CourseData;
