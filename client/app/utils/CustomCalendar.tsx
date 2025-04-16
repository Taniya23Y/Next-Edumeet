import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomCalendar = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  // Get current date
  const currentDay = new Date().getDate();

  // Function to format selected date
  const formatDate = (date: Date | null) => {
    if (!date) return "No date selected";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="glass flex flex-col items-center justify-center px-3 py-1 text-white ">
      <h2 className="text-center text-lg font-medium text-gray-300 mb-4">
        Your Study Days
      </h2>

      {/* Calendar Component */}
      <Calendar
        onChange={(value) => setDate(value as Date)}
        value={date}
        className="w-full custom-calendar"
        tileClassName={({ date: tileDate }) => {
          const day = tileDate.getDate();
          if (day === currentDay) return "current-day"; // Highlight today
          if (date && tileDate.toDateString() === date.toDateString())
            return "selected-day"; // Selected date
          return "normal-day";
        }}
        prevLabel={
          <FaChevronLeft className="text-gray-400 hover:text-yellow-400 transition" />
        }
        nextLabel={
          <FaChevronRight className="text-gray-400 hover:text-yellow-400 transition" />
        }
      />

      {/* Selected Date Display */}
      <p className="text-center text-gray-300 mt-2 text-lg">
        Selected Date:{" "}
        <span className="text-red-500 font-semibold">{formatDate(date)}</span>
      </p>

      <style>
        {`
        /* Remove default white background */
          .react-calendar {
            background: transparent !important;
            border: none !important;
            color: white;
          }

          /* Calendar Styling */
          .custom-calendar {
            width: 100% !important;
            max-width: 100% !important;
            background: transparent;
            border-radius: 12px;
          }

          /* Normal Dates - Subtle Gray */
          .normal-day {
            color: #cfcfcf;
            text-align: center;
            position: relative;
          }

          /* Current Day - Yellow Highlight */
          .current-day {
            background: yellow !important;
            color: black !important;
            border-radius: 50%;
            font-weight: bold;
            text-align: center;
            transition: all 0.3s ease-in-out;
          }

          /* Selected Day - Red Highlight */
          .selected-day {
            background: #ef4444 !important; /* Tailwind Red-500 */
            color: white !important;
            border-radius: 50%;
            font-weight: bold;
            text-align: center;
            transition: all 0.3s ease-in-out;
          }

          /* Hover Effects */
          .react-calendar__tile:hover {
            background: rgba(255, 221, 51, 0.3);
            border-radius: 50%;
            transform: scale(1.1);
            transition: all 0.2s ease-in-out;
          }

          /* Navigation Buttons */
          .react-calendar__navigation button {
            background: transparent;
            border: none;
            color: white;
          }

          .react-calendar__navigation button:hover {
            background: rgba(255, 221, 51, 0.3);
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default CustomCalendar;
