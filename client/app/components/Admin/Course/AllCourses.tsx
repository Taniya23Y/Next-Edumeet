/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import {
  useDeleteCourseMutation,
  useGetAllCoursesQuery,
} from "@/redux/features/courses/coursesApi";
import { format } from "timeago.js";
import { styles } from "@/app/styles/style";
import { toast } from "react-toastify";
import LoaderOne from "../../Loader/LoaderOne";

const AllCourses = () => {
  const { isLoading, data, refetch } = useGetAllCoursesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [deleteCourse, { isSuccess, error }] = useDeleteCourseMutation({});

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Course Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.3 },
    { field: "level", headerName: "Level", flex: 0.5 },
    { field: "demoUrl", headerName: "DemoUrl", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.4 },
    { field: "benefits", headerName: "Benefits", flex: 0.4 },
    { field: "prerequisites", headerName: "Prerequisites", flex: 0.4 },
    { field: "price", headerName: "Price", flex: 0.3 },
    { field: "created_at", headerName: "CreatedAt", flex: 0.5 },
    { field: "updated_at", headerName: "UpdatedAt", flex: 0.5 },
    {
      field: "  ",
      headerName: "Edit",
      flex: 0.3,
      renderCell: (params: any) => {
        return (
          <>
            <Button>
              <Link href={`/admin/edit-course/${params.row.id}`}>
                <AiFillEdit size={20} className={"text-emerald-500 "} />
              </Link>
            </Button>
          </>
        );
      },
    },
    {
      field: " ",
      headerName: "Delete",
      flex: 0.3,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpen(!open);
                setCourseId(params.row.id);
              }}
            >
              <AiOutlineDelete size={20} className={"text-red-500"} />
            </Button>
          </>
        );
      },
    },
  ];

  const rows: any = [];

  {
    data &&
      data.courses.forEach((item: any) => {
        rows.push({
          id: item._id,
          title: item.name,
          ratings: item.ratings,
          level: item.level,
          demoUrl: item.demoUrl,
          purchased: item.purchased,
          benefits: item.benefits?.length,
          prerequisites: item.prerequisites?.length,
          price: item.price,
          created_at: format(item.createdAt),
          updated_at: format(item.updatedAt),
        });
      });
  }

  useEffect(() => {
    if (isSuccess) {
      refetch();
      setOpen(false);
      toast.success("Course Deleted Successfully!");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess, error, refetch]);

  const handleDeleteCourse = async () => {
    const id = courseId;
    await deleteCourse(id);
  };

  return (
    <div className="mt-[90px]">
      {isLoading ? (
        <LoaderOne />
      ) : (
        <Box m="20px">
          <Box
            m="40px 0 0 0"
            height="84vh"
            borderRadius={20}
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
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>

          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-black border-yellow border-[2px] rounded-[8px] shadow p-4 outline-none">
                <h1 className={styles.title}>
                  Are you sure you want to delete this course?
                </h1>
                <div className=" mt-4 mb-6 flex w-full justify-around items-center">
                  <div
                    className={`${styles.btnOnly} !w-[120px] !bg-[#62cb5b] cursor-pointer`}
                    onClick={() => setOpen(!open)}
                  >
                    Cancel
                  </div>
                  <div
                    className={`${styles.btnOnly} !w-[120px] !bg-[#e34141] cursor-pointer`}
                    onClick={() => handleDeleteCourse()}
                  >
                    Delete
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </Box>
      )}
    </div>
  );
};

export default AllCourses;
