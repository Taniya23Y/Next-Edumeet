import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import { IOrder } from "../models/order.model";
import userModel from "../models/user.model";
import CourseModel, { ICourse } from "../models/course.model";
import path from "path";
import ejs from "ejs";
import sendMail from "../utils/sendMail";
import NotificationModel from "../models/notification.model";
import { getAllOrdersService, newOrder } from "../services/order.service";
import { redis } from "../utils/redis";

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const stripe = null;

// create order function
export const createOrder = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId, payment_info } = req.body as IOrder;

      // if (payment_info) {
      //   if ("id" in payment_info) {
      //     const paymentIntentId = payment_info.id;
      //     const paymentIntent = await stripe.paymentIntents.retrieve(
      //       paymentIntentId
      //     );

      //     if (paymentIntent.status !== "succeeded") {
      //       return next(new ErrorHandler("Payment not authorized!", 400));
      //     }
      //   }
      // }

      if (
        payment_info &&
        (payment_info as { id: string }).id !== "dummy_payment_id_123"
      ) {
        return next(new ErrorHandler("Payment not authorized!", 400));
      }

      const user = await userModel.findById(req.user?._id);

      const courseExistInUser = user?.courses.some(
        (course: any) => course.id.toString() === courseId
      );
      if (courseExistInUser) {
        return next(
          new ErrorHandler("You have already Purchased this course", 400)
        );
      }

      const course: ICourse | null = await CourseModel.findById(courseId);
      if (!course) {
        return next(new ErrorHandler("Course Not Found", 404));
      }

      const data: any = {
        courseId: course._id,
        userId: user?._id,
        payment_info,
      };

      const mailData = {
        order: {
          _id: course.id.toString().slice(0, 6),
          name: course.name,
          price: course.price,
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      };

      const html = await ejs.renderFile(
        path.join(__dirname, "../mails/order-confirmation.ejs"),
        { order: mailData }
      );

      try {
        if (user) {
          await sendMail({
            email: user.email,
            subject: "Order Confirmation",
            template: "order-confirmation.ejs",
            data: mailData,
          });
        }
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
      }

      user?.courses.push(course?.id);

      await redis.set(user?.id, JSON.stringify(user));

      await user?.save();

      await NotificationModel.create({
        user: user?._id,
        title: "New Order",
        message: `You have a new order from ${course?.name}`,
      });

      course.purchased = course.purchased + 1;

      await redis.set(courseId, JSON.stringify(course), "EX", 604800);

      await course.save();

      await newOrder(data, res, next);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// get all orders function --only for admin
export const getAllOrders = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      getAllOrdersService(res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//  send stripe publishable key
export const sendStripePublishableKey = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        publishablekey: process.env.STRIPE_PUBLISHABLE_KEY,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// new payment
export const newPayment = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "USD",
        description: "Edumeet courses services",
        shipping: {
          name: "Edumeet-eLearn",
          address: {
            line1: "510 xyz Std",
            postal_code: "19040",
            city: "XYZA Fran",
            state: "ABCD",
            country: "XYZ",
          },
        },
        metadata: {
          company: "Edumeet",
        },
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(201).json({
        success: true,
        // client_secret: myPayment.client_secret,
        client_secret: "dummy_client_secret_123",
        id: "dummy_payment_id_123",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
