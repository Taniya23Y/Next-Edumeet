/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { styles } from "../../../styles/style";
import React, { FC, useEffect, useState } from "react";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";

type Props = {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseInformation: FC<Props> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}) => {
  const [dragging, setDragging] = useState(false);
  const { data } = useGetHeroDataQuery("Categories", {});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data) {
      setCategories(data?.layout.categories);
    }
  }, [data]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setCourseInfo({ ...courseInfo, thumbnail: reader.result });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 p-6 bg-[#0A0A0A] border-2 border-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className={`${styles.label}`}>
            Course Name
          </label>
          <input
            type="name"
            name=""
            required
            value={courseInfo.name}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
            id="name"
            placeholder="MERN Stack Project With next.js"
            className={`${styles.inputs} bg-[#101010] !rounded-md `}
          />
        </div>

        <br />

        <div className="mb-3">
          <label htmlFor="" className={`${styles.label}`}>
            Course Description
          </label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Write Your Course Description..."
            value={courseInfo.description}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, description: e.target.value })
            }
            className={`${styles.inputs} bg-[#101010] !rounded-md !h-min !py-2 `}
          ></textarea>
        </div>

        <br />

        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label}`}>Course Price</label>
            <input
              type="number"
              name=""
              required
              value={courseInfo.price}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, price: e.target.value })
              }
              id="price"
              placeholder="39"
              className={`${styles.inputs} bg-[#101010] !rounded-md`}
            />
          </div>
          <div className="w-[50%]">
            <label className={`${styles.label}`}>
              Estimated Price(optional)
            </label>
            <input
              type="number"
              name=""
              required
              value={courseInfo.estimatedPrice}
              onChange={(e: any) =>
                setCourseInfo({
                  ...courseInfo,
                  estimatedPrice: e.target.value,
                })
              }
              id="price"
              placeholder="59"
              className={`${styles.inputs} bg-[#101010] !rounded-md`}
            />
          </div>
        </div>

        <br />

        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label htmlFor="email" className={`${styles.label}`}>
              Course Tags
            </label>
            <input
              type="text"
              name=""
              required
              value={courseInfo.tags}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, tags: e.target.value })
              }
              id="tags"
              placeholder="MERN, Next.js, React.js, TypeScript, JavaScript, Nodejs, MongoDB"
              className={`${styles.inputs} bg-[#101010] !rounded-md `}
            />
          </div>

          <div className="w-[50%]">
            <label htmlFor="email" className={`${styles.label}`}>
              Course Categories
            </label>
            <select
              name=""
              id=""
              className={`${styles.input}`}
              value={courseInfo.category}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, categories: e.target.value })
              }
            >
              <option className="bg-[#000] text-[#fff]" value="">
                Select Category
              </option>
              {categories &&
                categories.map((item: any) => (
                  <option
                    className="bg-[#000] text-[#fff]"
                    value={item.title}
                    key={item._id}
                  >
                    {item.title}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <br />

        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label}`}>Course Level</label>
            <input
              type="text"
              name=""
              required
              value={courseInfo.level}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, level: e.target.value })
              }
              id="level"
              placeholder="Beginner/Intermediated/Expert"
              className={`${styles.inputs} bg-[#101010] !rounded-md `}
            />
          </div>
          <div className="w-[50%]">
            <label className={`${styles.label} w-[50%]`}>Demo Url</label>
            <input
              type="text"
              name=""
              required
              value={courseInfo.demoUrl}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
              id="demoUrl"
              placeholder="dd89gh34"
              className={`${styles.inputs} bg-[#101010] !rounded-md`}
            />
          </div>
        </div>

        <br />
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`${
              styles.label
            } w-full min-h-[10vh] border-white p-3 border flex items-center justify-center ${
              dragging ? "bg-[#ebc0c0]" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {courseInfo.thumbnail ? (
              <Image
                width={100}
                height={100}
                src={courseInfo.thumbnail}
                alt="thumbnail"
                className="w-auto h-auto max-w-full max-h-full object-cover"
              />
            ) : (
              <span className="text-white">
                Drag and Drop your thumbnail here or click to browse
              </span>
            )}
          </label>
        </div>

        <div className="w-full flex items-center justify-end">
          <div
            className={`button w-full 800px:w-[180px] flex items-center justify-center h-[40px] text-center !text-black mt-8 cursor-pointer rounded `}
          >
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
      </form>
    </div>
  );
};

export default CourseInformation;
