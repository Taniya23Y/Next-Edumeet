/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const PaginationComponent = ({
  itemArray = [],
  startIndex,
  setStartIndex,
  resultPerPage,
}: any) => {
  if (!Array.isArray(itemArray) || itemArray.length === 0) return null;

  const totalPages = Math.ceil(itemArray.length / resultPerPage);
  const currentPage = Math.floor(startIndex / resultPerPage) + 1;

  const goToPage = (page: number) => {
    const newStart = (page - 1) * resultPerPage;
    setStartIndex(newStart);
  };

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-12 flex-wrap">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-5 py-2 cursor-pointer rounded-xl text-white backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 disabled:opacity-40 transition duration-300 shadow-lg"
      >
        Previous
      </button>

      <div className="flex">
        {getPages().map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 font-semibold text-sm ${
              page === currentPage
                ? "bg-[#FFB400] text-white shadow-xl scale-105"
                : "text-white hover:bg-white/20"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-5 py-2 cursor-pointer rounded-xl text-white backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 disabled:opacity-40 transition duration-300 shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
