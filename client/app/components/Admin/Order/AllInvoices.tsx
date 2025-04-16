/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import LoaderOne from "../../Loader/LoaderOne";
import { format } from "timeago.js";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { MdMarkEmailRead } from "react-icons/md";
import { useGetAllOrdersQuery } from "@/redux/features/orders/orderApi";

type Props = {
  isDashboard?: boolean;
};

const AllInvoices = ({ isDashboard }: Props) => {
  const { isLoading, data } = useGetAllOrdersQuery({});
  const { data: usersData } = useGetAllUsersQuery({});
  const { data: coursesData } = useGetAllCoursesQuery({});

  const [orderData, setOrderData] = useState<any>([]);

  useEffect(() => {
    if (data && usersData && coursesData) {
      const temp = data.orders.map((item: any) => {
        const user = usersData.users.find(
          (user: any) => user._id === item.userId
        );
        const course = coursesData.courses.find(
          (course: any) => course._id === item.courseId
        );

        return {
          ...item,
          userName: user?.name || "Unknown",
          userEmail: user?.email || "No Email",
          title: course?.name || "No Title",
          price: course?.price ? `$${course.price}` : "N/A",
        };
      });
      setOrderData(temp);
    }
  }, [data, usersData, coursesData]);

  const columns: any = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "userName", headerName: "Name", flex: isDashboard ? 0.6 : 0.5 },
    ...(isDashboard
      ? []
      : [
          { field: "userEmail", headerName: "Email", flex: 1 },
          { field: "title", headerName: "Course Title", flex: 1 },
        ]),
    { field: "price", headerName: "Price", flex: 0.3 },
    ...(isDashboard
      ? [{ field: "created_at", headerName: "Created At", flex: 0.5 }]
      : [
          {
            field: "emailAction",
            headerName: "Email",
            flex: 0.2,
            renderCell: (params: any) => (
              <button>
                <a href={`mailto:${params.row.userEmail}`}>
                  <MdMarkEmailRead size={20} className="text-emerald-500" />
                </a>
              </button>
            ),
          },
        ]),
  ];

  const rows: any = [];

  if (orderData) {
    orderData.forEach((item: any) => {
      rows.push({
        id: item._id,
        userName: item.userName,
        userEmail: item.userEmail,
        title: item.title,
        price: item.price,
        created_at: format(item.createdAt),
      });
    });
  }

  return (
    <div className={!isDashboard ? "mt-[120px]" : "mt-[0px]"}>
      {isLoading ? (
        <LoaderOne />
      ) : (
        <Box m={isDashboard ? "0" : "40px"} borderRadius={20}>
          <Box
            m={isDashboard ? "0" : "40px 0 0 0"}
            height={isDashboard ? "35vh" : "90vh"}
            overflow="hidden"
            sx={{
              "& MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: "#871d05",
              },
              "& .MuiDataGrid-row": {
                color: "#fff",
                borderBottom: "1px solid #ffffff30 !important",
              },
              "& .MuiTablePagination-root": {
                color: "#fff",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: "#fff",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#242527",
                borderBottom: "none",
                color: "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "#070808",
              },
              "& .MuiDataGrid-footerContainer": {
                color: "#fff",
                borderTop: "none",
                backgroundColor: "#242527",
              },
              "& .MuiCheckbox-root": {
                color: `#d2e02f !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `#fff !important`,
              },
            }}
          >
            <DataGrid
              checkboxSelection={!isDashboard}
              rows={rows}
              columns={columns}
              slots={!isDashboard ? { toolbar: GridToolbar } : {}}
            />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default AllInvoices;
