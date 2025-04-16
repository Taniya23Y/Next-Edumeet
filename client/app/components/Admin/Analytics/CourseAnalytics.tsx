/* eslint-disable @typescript-eslint/no-explicit-any */
import { styles } from "@/app/styles/style";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Label,
  YAxis,
  LabelList,
} from "recharts";
import LoaderOne from "../../Loader/LoaderOne";
import { useGetCoursesAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";

const CourseAnalytics = () => {
  const { data, isLoading } = useGetCoursesAnalyticsQuery({});

  // Use map to transform data safely
  const analyticsData =
    data?.courses?.last12Months?.map((item: any) => ({
      name: item.month,
      uv: item.count,
    })) || [];

  const minValue = 0;

  return (
    <>
      {isLoading ? (
        <LoaderOne />
      ) : (
        <div className="h-screen">
          <div className="mt-[50px] pl-10">
            <h1 className={`${styles.title} !text-[#C8EA80] px-5 !text-start`}>
              Courses Analytics
            </h1>
            <p className={`${styles.label} px-5`}>
              Last 12 months analytics data{" "}
            </p>
          </div>

          <div className="w-full h-[90%] flex items-center justify-center">
            <ResponsiveContainer width="90%" height="50%">
              <BarChart width={150} height={300} data={analyticsData}>
                <XAxis dataKey="name">
                  <Label offset={0} position="insideBottom" />
                </XAxis>
                <YAxis domain={[minValue, "auto"]} />
                <Bar dataKey="uv" fill="#3faf82">
                  <LabelList dataKey="uv" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseAnalytics;
