/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

type Props = {
  itemArray: any;
  data?: any;
  resultPerPage: number;
  startIndex: number;
  setStartIndex: (startIndex: number) => void;
  lastIndex: number;
  setLastIndex: (lastIndex: number) => void;
};

const PaginationComponent = ({
  itemArray: courses,
  data,
  startIndex,
  setStartIndex,
  lastIndex,
  setLastIndex,
  resultPerPage,
}: Props) => {
  let totalPagination = Math.ceil(data?.length / resultPerPage);

  const [focus, setFocus] = useState(0);

  if (courses && courses.length) {
    totalPagination = Math.ceil(courses.length / resultPerPage);
  }
  const pageChangeHandler = (index: number) => {
    setStartIndex(resultPerPage * index);
    setLastIndex(resultPerPage * index + resultPerPage);
    setFocus(index);
    window.scrollTo(0, 300);
  };

  const setPrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - resultPerPage);
      setLastIndex(lastIndex - resultPerPage);
      setFocus(focus - 1);
      window.scrollTo(0, 300);
    }
  };
  const setNext = () => {
    if (courses && courses.length) {
      if (lastIndex < courses.length) {
        setStartIndex(startIndex + resultPerPage);
        setLastIndex(lastIndex + resultPerPage);
        setFocus(focus + 1);
        window.scrollTo(0, 300);
      }
    }
  };
  return (
    <div className="w-full 800px:mt-[80px] mb-1 flex justify-center items-center  ">
      <button
        className=" border rounded-md active:bg-slate-800 p-1 bg-transparent text-white m-2"
        onClick={() => setPrev()}
      >
        prev
      </button>
      <div className="w-[150px] overflow-x-scroll flex flex-row justify-start items-center ">
        {[...Array(totalPagination)].map((item: any, index: number) => (
          <button
            className={`min-w-[40px] min-h-[35px] rounded-md text-center active:bg-slate-800 text-white m-1
                    ${focus === index ? " bg-blue-400" : "bg-slate-700"}
                    `}
            key={index}
            onClick={() => pageChangeHandler(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className=" border p-1 rounded-md active:bg-slate-800 bg-transparent text-white m-2"
        onClick={() => setNext()}
      >
        next
      </button>
    </div>
  );
};

export default PaginationComponent;
