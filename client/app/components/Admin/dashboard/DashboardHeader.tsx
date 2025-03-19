/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useGetAllNotificationQuery,
  useUpdateNotificationMutation,
} from "@/redux/features/notification/notificationApi";
import React, { FC, useEffect, useRef, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import socketIO from "socket.io-client";
import { format } from "timeago.js";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

type Props = {
  open?: boolean;
  setOpen?: any;
};

const DashboardHeader: FC<Props> = ({ open, setOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data, refetch } = useGetAllNotificationQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [updateNotification, { isSuccess }] = useUpdateNotificationMutation();

  const [notification, setNotification] = useState([]);

  const [audio] = useState(
    new Audio(
      "https://res.cloudinary.com/damk25wo5/video/upload/v1693465789/notification_vcetjn.mp3"
    )
  );

  const playerNotificationSound = () => {
    audio.play();
  };

  useEffect(() => {
    if (data?.notification) {
      setNotification(
        data?.notification.filter((item: any) => item.status === "unread")
      );
    }
    if (isSuccess) {
      refetch();
    }
    audio.load();
  }, [data, isSuccess, audio, refetch]);

  useEffect(() => {
    socketId.on("newNotification", (data) => {
      refetch();
      playerNotificationSound();
    });
  }, [refetch]);

  const handleNotificationStatusChange = async (id: string) => {
    await updateNotification(id);
  };

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
          {notification && notification.length}
        </span>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute w-[350px] max-h-[60vh] bg-[#e5dcc2] glass glass-bg shadow-xl top-14 right-2 z-50 rounded-xl overflow-y-auto"
        >
          <div className="bg-[#000] mb-2">
            <h5 className="text-center text-white text-lg font-semibold p-3 ">
              Notifications
            </h5>
          </div>

          {/* Notification Item 2 */}
          <div className="bg-[#05493a] font-Poppins border-b border-[#D6D7DD] px-4 py-3 ml-2 mr-2 mb-2 rounded-xl">
            <div className="flex items-center justify-between">
              <p className="text-yellow font-medium">New Question Received</p>
              <p className="text-red-500 font-bold cursor-pointer text-sm">
                Mark as read
              </p>
            </div>
            <p className="text-white text-[15px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              perspiciatis?
            </p>
            <p className="text-gray-200 text-xs mt-1">5 days ago</p>
          </div>

          {notification &&
            notification.map((item: any, index: number) => (
              <div
                className="bg-[#05493a] font-Poppins border-b border-[#D6D7DD] px-4 py-3 ml-2 mr-2 mb-2 rounded-xl"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <p className="text-yellow font-medium">{item?.title}</p>
                  <p
                    className="text-red-500 font-bold cursor-pointer text-sm"
                    onClick={() => handleNotificationStatusChange(item._id)}
                  >
                    Mark as read
                  </p>
                </div>
                <p className="text-white text-[15px] mt-1">{item?.message}</p>
                <p className="text-gray-200 text-xs mt-1">
                  {format(item.createdAt)}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
