/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { FC, useEffect, useRef } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

type Props = {
  open?: boolean;
  setOpen?: any;
};

const DashboardHeader: FC<Props> = ({ open, setOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex items-center justify-end fixed p-4 top-5 right-5 z-50">
      {/* Notification Icon */}
      <div
        className="relative cursor-pointer bg-white p-1 rounded-full shadow-lg"
        onClick={() => setOpen(!open)}
      >
        <IoMdNotificationsOutline className="text-2xl text-black" />
        <span className="absolute -top-1 -right-1 bg-[#d63832] rounded-full w-[18px] h-[18px] text-[12px] flex items-center justify-center text-white font-semibold">
          3
        </span>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute w-[350px] max-h-[60vh] bg-[#e5dcc2] shadow-xl top-14 right-2 z-50 rounded-xl overflow-y-auto"
        >
          <h5 className="text-center text-black text-lg font-semibold p-3 ">
            Notifications
          </h5>

          {/* Notification Item 1 */}
          <div className="bg-[#FE955B] font-Poppins border-b border-[#D6D7DD] px-4 py-3 ml-2 mr-2 mb-2 rounded-xl">
            <div className="flex items-center justify-between">
              <p className="text-black font-medium">New Question Received</p>
              <p className="text-white font-bold cursor-pointer text-sm">
                Mark as read
              </p>
            </div>
            <p className="text-white text-[15px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              perspiciatis?
            </p>
            <p className="text-gray-200 text-xs mt-1">5 days ago</p>
          </div>

          {/* Notification Item 2 */}
          <div className="bg-[#E69AF0] font-Poppins border-b border-[#D6D7DD] px-4 py-3 ml-2 mr-2 mb-2 rounded-xl">
            <div className="flex items-center justify-between">
              <p className="text-black font-medium">New Question Received</p>
              <p className="text-white font-bold cursor-pointer text-sm">
                Mark as read
              </p>
            </div>
            <p className="text-white text-[15px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              perspiciatis?
            </p>
            <p className="text-gray-200 text-xs mt-1">5 days ago</p>
          </div>

          {/* Notification Item 2 */}
          <div className="bg-[#30584F] font-Poppins border-b border-[#D6D7DD] px-4 py-3 ml-2 mr-2 mb-2 rounded-xl">
            <div className="flex items-center justify-between">
              <p className="text-black font-medium">New Question Received</p>
              <p className="text-white font-bold cursor-pointer text-sm">
                Mark as read
              </p>
            </div>
            <p className="text-white text-[15px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              perspiciatis?
            </p>
            <p className="text-gray-200 text-xs mt-1">5 days ago</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
