/* eslint-disable @typescript-eslint/no-explicit-any */
import { styles } from "@/app/styles/style";
import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import React, { FC } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LoaderOne from "../../Loader/LoaderOne";

type Props = {
  isDashboard?: boolean;
};

const UsersAnalytics: FC<Props> = ({ isDashboard }: Props) => {
  const { data, isLoading } = useGetUsersAnalyticsQuery({});

  // Declare the analyticsData array only when the data is available
  const analyticsData = data
    ? data.users.last12Months.map((item: any) => ({
        name: item.month,
        count: item.count,
      }))
    : [];

  return (
    <>
      {isLoading ? (
        <LoaderOne />
      ) : (
        <div
          className={`${
            !isDashboard
              ? "mt-[50px] pl-10"
              : "mt-[50px] text-white shadow-sm pb-5 rounded-sm"
          }`}
        >
          <div className={`${isDashboard ? "!ml-8 mb-5" : ""}`}>
            <h1
              className={`${styles.title} ${
                isDashboard && "!text-[20px] !text-[#C8EA80]"
              } px-5 pl-20 !text-start !text-[#C8EA80]`}
            >
              Users Analytics
            </h1>
            {!isDashboard && (
              <p className={`${styles.label} pl-20 px-5`}>
                Last 12 months analytics data{" "}
              </p>
            )}
          </div>

          <div
            className={`w-full ${
              isDashboard ? "h-[30vh]" : "h-screen"
            } flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={isDashboard ? "100%" : "90%"}
              height={!isDashboard ? "50%" : "100%"}
            >
              <AreaChart
                data={analyticsData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#3FAF82"
                  fill="#3FAF82"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersAnalytics;
