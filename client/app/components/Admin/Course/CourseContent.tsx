/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { styles } from "../../../styles/style";
import React, { FC, useState } from "react";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { toast } from "react-toastify";

type Props = {
  active: number;
  SetActive: (active: number) => void;
  courseContentData: any;
  setCourseContentData: (courseContentData: any) => void;
  handleSubmit: any;
};

const CourseContent: FC<Props> = ({
  courseContentData,
  setCourseContentData,
  active,
  SetActive,
  handleSubmit: handleCourseSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(courseContentData.length).fill(false)
  );
  const [activeSection, setActiveSection] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleCollapseToggle = (index: number) => {
    const updatedCollapsed = [...isCollapsed];
    updatedCollapsed[index] = !updatedCollapsed[index];
    setIsCollapsed(updatedCollapsed);
  };

  const handleRemoveLink = (index: number, linkIndex: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.splice(linkIndex, 1);
    setCourseContentData(updatedData);
  };

  const handleAddLink = (index: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.push({ title: "", url: "" });
    setCourseContentData(updatedData);
  };

  const newContentHandler = (item: any) => {
    if (
      item.title === "" ||
      item.description === "" ||
      item.videoUrl === "" ||
      item.videoLength === "" ||
      item.links[0].title === "" ||
      item.links[0].url === ""
    ) {
      toast.error("Please fill all the fields first!");
    } else {
      let newVideoSection = "";

      if (courseContentData.length > 0) {
        const lastVideoSection =
          courseContentData[courseContentData.length - 1].videoSection;

        if (lastVideoSection) {
          newVideoSection = lastVideoSection;
        }
      }

      const newContent = {
        videoUrl: "",
        title: "",
        videoLength: "",
        description: "",
        videoSection: newVideoSection,
        links: [{ title: "", url: "" }],
      };

      setCourseContentData([...courseContentData, newContent]);
    }
  };

  const addNewSection = () => {
    if (
      courseContentData[courseContentData.length - 1].title === "" ||
      courseContentData[courseContentData.length - 1].description === "" ||
      courseContentData[courseContentData.length - 1].videoLength === "" ||
      courseContentData[courseContentData.length - 1].videoUrl === "" ||
      courseContentData[courseContentData.length - 1].links[0].title === "" ||
      courseContentData[courseContentData.length - 1].links[0].url === ""
    ) {
      toast.error("Please fill all the fields first!");
    } else {
      setActiveSection(activeSection + 1);
      const newContent = {
        videoUrl: "",
        title: "",
        videoLength: "",
        description: "",
        videoSection: `Untitled Section ${activeSection}`,
        links: [{ title: "", url: "" }],
      };
      setCourseContentData([...courseContentData, newContent]);
    }
  };

  const previousButton = () => {
    SetActive(active - 1);
  };

  const handleOptions = () => {
    if (
      courseContentData[courseContentData.length - 1].title === "" ||
      courseContentData[courseContentData.length - 1].description === "" ||
      courseContentData[courseContentData.length - 1].videoUrl === "" ||
      courseContentData[courseContentData.length - 1].links[0].title === "" ||
      courseContentData[courseContentData.length - 1].links[0].url === ""
    ) {
      toast.error("Section can't be empty!");
    } else {
      SetActive(active + 1);
      handleCourseSubmit();
    }
  };

  return (
    <div className="w-[80%] m-auto mt-8 p-6 bg-black rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        {courseContentData?.map((item: any, index: number) => {
          const showSectionInput =
            index === 0 ||
            item.videoSection !== courseContentData[index - 1].videoSection;

          return (
            <div
              key={index}
              className={`w-full bg-[#1a1a1a] rounded-lg p-6 mb-6 transition-all duration-300 ${
                showSectionInput ? "mt-8" : "mt-4"
              }`}
            >
              {showSectionInput && (
                <div className="flex items-center justify-between mb-6">
                  <input
                    type="text"
                    className={`text-2xl font-semibold bg-transparent outline-none w-full ${
                      item.videoSection === "Untitled Section"
                        ? "text-purple-400"
                        : "text-white"
                    }`}
                    value={item?.videoSection}
                    onChange={(e) => {
                      const updatedData = [...courseContentData];
                      updatedData[index].videoSection = e.target.value;
                      setCourseContentData(updatedData);
                    }}
                  />
                  <BiPencil className="text-gray-400 cursor-pointer hover:text-white" />
                </div>
              )}
              <div className="flex items-center justify-between mb-4">
                {isCollapsed[index] ? (
                  item.title ? (
                    <p className="text-lg font-medium text-white">
                      {index + 1}. {item.title}
                    </p>
                  ) : null
                ) : null}
                <div className="flex items-center gap-3">
                  <AiOutlineDelete
                    className={`text-xl ${
                      index > 0
                        ? "text-red-500 cursor-pointer hover:text-red-600"
                        : "text-red-500 cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (index > 0) {
                        const updatedData = [...courseContentData];
                        updatedData.splice(index, 1);
                        setCourseContentData(updatedData);
                      }
                    }}
                  />
                  <MdOutlineKeyboardArrowDown
                    className={`text-2xl text-gray-400 cursor-pointer transition-transform ${
                      isCollapsed[index] ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() => handleCollapseToggle(index)}
                  />
                </div>
              </div>
              {!isCollapsed[index] && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Video Title
                    </label>
                    <input
                      type="text"
                      placeholder="Course Title..."
                      className={`w-full px-4 py-2 ${styles.inputs} bg-[#101010] rounded-lg text-white`}
                      value={item.title}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].title = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Video URL
                    </label>
                    <input
                      type="text"
                      placeholder="Course Video Url..."
                      className={`w-full px-4 py-2 ${styles.inputs} bg-[#101010] rounded-lg text-white`}
                      value={item.videoUrl}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].videoUrl = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Video Length(in minutes)
                    </label>
                    <input
                      type="number"
                      placeholder="20"
                      className={`w-full px-4 py-2 ${styles.inputs} bg-[#101010] rounded-lg text-white`}
                      value={item.videoLength}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].videoLength = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Video Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Course Video Description..."
                      className={`w-full px-4 py-2 ${styles.inputs} bg-[#101010] rounded-lg text-white`}
                      value={item.description}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].description = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>
                  {item?.links.map((link: any, linkIndex: number) => (
                    <div key={linkIndex} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-400">
                          Link {linkIndex + 1}
                        </label>
                        <AiOutlineDelete
                          className={`text-xl ${
                            linkIndex === 0
                              ? "text-red-500 hover:text-red-600 cursor-not-allowed"
                              : "text-red-500 cursor-pointer hover:text-red-600"
                          }`}
                          onClick={() =>
                            linkIndex === 0
                              ? null
                              : handleRemoveLink(index, linkIndex)
                          }
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Link Title..."
                        className={`w-full px-4 py-2 ${styles.inputs} bg-[#101010] rounded-lg text-white`}
                        value={link.title}
                        onChange={(e) => {
                          const updatedData = [...courseContentData];
                          updatedData[index].links[linkIndex].title =
                            e.target.value;
                          setCourseContentData(updatedData);
                        }}
                      />
                      <input
                        type="url"
                        placeholder="Link URL..."
                        className={`w-full px-4 py-2 ${styles.inputs} bg-[#101010] rounded-lg text-white`}
                        value={link.url}
                        onChange={(e) => {
                          const updatedData = [...courseContentData];
                          updatedData[index].links[linkIndex].url =
                            e.target.value;
                          setCourseContentData(updatedData);
                        }}
                      />
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-blue-400 cursor-pointer hover:text-blue-500">
                    <BsLink45Deg className="text-xl" />
                    <span onClick={() => handleAddLink(index)}>Add Link</span>
                  </div>
                </div>
              )}
              {index === courseContentData.length - 1 && (
                <div className="flex items-center gap-2 text-blue-400 cursor-pointer hover:text-blue-500 mt-6">
                  <AiOutlinePlusCircle className="text-xl" />
                  <span onClick={(e: any) => newContentHandler(item)}>
                    Add New Content
                  </span>
                </div>
              )}
            </div>
          );
        })}
        <div className="flex items-center gap-2 text-blue-400 cursor-pointer hover:text-blue-500 mt-6">
          <AiOutlinePlusCircle className="text-xl" />
          <span onClick={addNewSection}>Add New Section</span>
        </div>
      </form>
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

export default CourseContent;
