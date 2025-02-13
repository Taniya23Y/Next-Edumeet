import { Response } from "express";
import CourseModel from "../models/course.model";
import { catchAsyncError } from "../middleware/catchAsyncErrors";

// create course function
export const createCourse = catchAsyncError(
  async (data: any, res: Response) => {
    const course = await CourseModel.create(data);
    res.status(201).json({
      success: true,
      course,
    });
  }
);

// get all courses function
// export const getAllCourse = async (res: Response) => {
//   const courses = await CourseModel.find().sort({ createdAt: -1 });

//   res.status(201).json({
//     success: true,
//     courses,
//   });
// };
