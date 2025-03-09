/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useState } from "react";
import { BiBorderLeft } from "react-icons/bi";
import { PiUsersFourLight } from "react-icons/pi";
import {
  Map,
  PlayCircle,
  ClipboardList,
  Youtube,
  LineChart,
  Users,
} from "lucide-react";
import { Box, CircularProgress } from "@mui/material";
import OrdersAnalytics from "../Analytics/OrdersAnalytics";
import AllInvoices from "../Order/AllInvoices";
import {
  useGetOrdersAnalyticsQuery,
  useGetUsersAnalyticsQuery,
} from "@/redux/features/analytics/analyticsApi";
import UsersAnalytics from "../Analytics/UsersAnalytics";
import VisionBtn from "@/app/UI/VisionBtn";
import CustomCalendar from "@/app/utils/CustomCalendar";
import HighlightText from "../../../UI/HighlightText";

type Props = {
  open?: boolean;
  value?: number;
};

const CircularProgressWithLabel: FC<Props> = ({ open, value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={45}
        color={value && value > 99 ? "info" : "error"}
        thickness={4}
        style={{ zIndex: open ? -1 : 1 }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};

const features = [
  {
    icon: BiBorderLeft,
  },
  {
    icon: PiUsersFourLight,
  },
  {
    icon: Map,
  },
  {
    icon: PlayCircle,
  },
  {
    icon: ClipboardList,
  },
  {
    icon: Youtube,
  },
  {
    icon: LineChart,
  },
  {
    icon: Users,
  },
];

const DashboardWidgets: FC<Props> = ({ open }) => {
  const [ordersComparePercentage, setOrdersComparePercentage] = useState<any>();
  const [userComparePercentage, setuserComparePercentage] = useState<any>();
  // const [date, setDate] = useState(new Date());

  const { data, isLoading } = useGetUsersAnalyticsQuery({});
  const { data: ordersData, isLoading: ordersLoading } =
    useGetOrdersAnalyticsQuery({});

  useEffect(() => {
    if (isLoading && ordersLoading) {
      return;
    } else {
      if (data && ordersData) {
        const usersLastTwoMonths = data.users.last12Months.slice(-2);
        const ordersLastTwoMonths = ordersData.orders.last12Months.slice(-2);

        if (
          usersLastTwoMonths.length === 2 &&
          ordersLastTwoMonths.length === 2
        ) {
          const usersCurrentMonth = usersLastTwoMonths[1].count;
          const usersPreviousMonth = usersLastTwoMonths[0].count;
          const ordersCurrentMonth = ordersLastTwoMonths[1].count;
          const ordersPreviousMonth = ordersLastTwoMonths[0].count;

          const usersPercentChange =
            usersPreviousMonth !== 0
              ? ((usersCurrentMonth - usersPreviousMonth) /
                  usersPreviousMonth) *
                100
              : 100;

          const ordersPercentChange =
            ordersPreviousMonth !== 0
              ? ((ordersCurrentMonth - ordersPreviousMonth) /
                  ordersPreviousMonth) *
                100
              : 100;

          setuserComparePercentage({
            currentMonth: usersCurrentMonth,
            previousMonth: usersPreviousMonth,
            percentChange: usersPercentChange,
          });

          setOrdersComparePercentage({
            currentMonth: ordersCurrentMonth,
            previousMonth: ordersPreviousMonth,
            percentChange: ordersPercentChange,
          });
        }
      }
    }
  }, [isLoading, ordersLoading, data, ordersData]);

  return (
    <div className="min-h-screen p-6 mt-[4rem] text-white">
      {/* Welcome Section & Calendar */}
      <div className="min-h-screen p-6 mt-[1rem] text-white">
        {/* Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
          <div className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-300 font-Josefin_Sans">
              Welcome to <HighlightText text="EduMeet Admin Dashboard" />
            </h2>
            <p className="text-gray-400 mt-2">
              Manage and analyze users, courses, and orders with ease.
            </p>
          </div>
        </div>

        {/* Main Grid Layout: Left 6 Boxes & Right Calendar */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Side - 6 Boxes */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="bg-[#F5CE65] border-2 border-[#ffd632] p-6 rounded-xl shadow-md">
              <VisionBtn Icon={features[2].icon} />
              <h5 className="text-white pt-1 text-2xl font-semibold">
                Structured Roadmaps
              </h5>
              <p className="text-black text-xl font-bold">10000</p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#DE4853] border-2 border-[#f64b35] p-6 rounded-xl shadow-md">
              <VisionBtn Icon={features[3].icon} />
              <h5 className="text-white pt-1 text-2xl font-semibold">
                Free Coding Courses
              </h5>
              <p className="text-black text-xl font-bold">5</p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#AFA2F4] border-2 border-[#765eed] p-6 rounded-xl shadow-md">
              <VisionBtn Icon={features[4].icon} />
              <h5 className="text-white pt-1 text-2xl font-semibold">
                Tailored Assignments
              </h5>
              <p className="text-black text-xl font-bold">5</p>
            </div>

            {/* Box 4 */}
            <div className="bg-[#2BD886] border-2 border-[#1a7b4e] p-6 rounded-xl shadow-md">
              <VisionBtn Icon={features[5].icon} />
              <h5 className="text-white pt-1 text-2xl font-semibold">
                YouTube & Other&apos;s Course Preview
              </h5>
              <p className="text-black text-xl font-bold">₹50K</p>
            </div>

            {/* Box 5 */}
            <div className="bg-[#CADE7F] border-2 border-[#cdf831] p-6 rounded-xl shadow-md">
              <VisionBtn Icon={features[6].icon} />
              <h5 className="text-white pt-1 text-2xl font-semibold">
                Progress Tracking
              </h5>
              <p className="text-black text-xl font-bold">1200</p>
            </div>

            {/* Box 6 */}
            <div className="bg-[#FF8C42] border-2 border-[#fb7e36] p-6 rounded-xl shadow-md">
              <VisionBtn Icon={features[7].icon} />
              <h5 className="text-white pt-1 text-2xl font-semibold">
                Community Support
              </h5>
              <p className="text-black text-xl font-bold">50</p>
            </div>
          </div>

          {/* Right Side - Calendar */}
          <div className="bg-transparent rounded-xl flex items-center justify-center shadow-lg">
            <CustomCalendar />
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Users Analytics - Now Equal to Orders Analytics */}
        <div className="lg:col-span-2 bg-[#1E1E1E] p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            Users Overview
          </h3>
          <UsersAnalytics isDashboard={true} />
        </div>

        {/* Sales & Users Compact Boxes - Now Given More Space */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Sales Card */}
          <div className="bg-[#A5CDFE] border-2 border-[#438feb] p-7 rounded-xl shadow-md flex items-center justify-between">
            <div>
              <VisionBtn Icon={features[0].icon} />
              <h5 className="pt-2 pl-3 text-[#fff] text-2xl font-semibold">
                {ordersComparePercentage?.currentMonth}
              </h5>
              <p className="text-[#000] pl-3 text-[21px] font-bold">
                Sales Obtained
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 flex-col">
              <CircularProgressWithLabel
                value={ordersComparePercentage?.percentChange > 0 ? 100 : 0}
                open={open}
              />
              <h5 className="text-center text-[#000] pt-4">
                {ordersComparePercentage?.percentChange > 0
                  ? "+" + ordersComparePercentage?.percentChange.toFixed(2)
                  : "-" +
                    ordersComparePercentage?.percentChange.toFixed(2)}{" "}
                %
              </h5>
            </div>
          </div>

          {/* New Users Card */}
          <div className="bg-[#63BB8B] border-2 border-[#1af17b] p-7 rounded-xl shadow-md flex items-center justify-between">
            <div>
              <VisionBtn Icon={features[1].icon} />
              <h5 className="pt-2 pl-3 text-white text-2xl font-semibold">
                {userComparePercentage?.currentMonth}
              </h5>
              <p className="text-[#000] pl-3 text-[21px] font-bold">
                New Users
              </p>
            </div>
            <div>
              <CircularProgressWithLabel
                value={userComparePercentage?.percentChange > 0 ? 100 : 0}
                open={open}
              />
              <h5 className="text-center text-[#000] pt-4">
                {userComparePercentage?.percentChange > 0
                  ? "+" + userComparePercentage?.percentChange.toFixed(2)
                  : "-" + userComparePercentage?.percentChange.toFixed(2)}{" "}
                %
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Analytics & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-[#1E1E1E] p-6 rounded-xl shadow-lg pb-[4rem]">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            Orders Overview
          </h3>
          <OrdersAnalytics isDashboard={true} />
        </div>
        <div className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg">
          <h5 className="text-gray-300 text-lg font-semibold pb-3">
            Recent Transactions
          </h5>
          <AllInvoices isDashboard={true} />
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
