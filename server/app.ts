require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRoute from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";
import { rateLimit } from "express-rate-limit";

// cookie-parser
app.use(cookieParser());

// body parser
app.use(express.json({ limit: "50mb" }));

// cors => cross origin resource sharing
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// api request limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: "draft-7", // drafts-6: RateLimit-* headers; drafts-7: combined RateLimit header
  legacyHeaders: false, // X-RateLimit-* headers
  // store: .... // use an external store for more precise rate limiting
});

// routes
// app.use("/api/v1", userRouter, courseRouter, orderRouter, notificationRoute, analyticsRouter, layoutRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);
app.use("/api/v1", orderRouter);
app.use("/api/v1", notificationRoute);
app.use("/api/v1", analyticsRouter);
app.use("/api/v1", layoutRouter);

// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is Working",
  });
});

// unKnown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// rate limiting middleware to API calls only
app.use(limiter);

app.use(ErrorMiddleware);
