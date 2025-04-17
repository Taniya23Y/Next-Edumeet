"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVideoUrl = exports.deleteCourse = exports.getAdminAllCourses = exports.addReplyToReview = exports.addReview = exports.addAnswer = exports.addQuestion = exports.getCourseByUser = exports.getAllCourses = exports.getSingleCourse = exports.editCourse = exports.uploadCourse = void 0;
const catchAsyncErrors_1 = require("../middleware/catchAsyncErrors");
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const course_service_1 = require("../services/course.service");
const course_model_1 = __importDefault(require("../models/course.model"));
const redis_1 = require("../utils/redis");
const mongoose_1 = __importDefault(require("mongoose"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const sendMail_1 = __importDefault(require("../utils/sendMail"));
const notification_model_1 = __importDefault(require("../models/notification.model"));
const axios_1 = __importDefault(require("axios"));
// upload course
exports.uploadCourse = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const data = req.body;
        const thumbnail = data.thumbnail;
        if (thumbnail) {
            const myCloud = await cloudinary_1.default.v2.uploader.upload(thumbnail, {
                folder: "courses",
            });
            data.thumbnail = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            };
        }
        (0, course_service_1.createCourse)(data, res, next);
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// edit course
exports.editCourse = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const data = req.body;
        const thumbnail = data.thumbnail;
        const courseId = req.params.id;
        // Fetch existing course data
        const courseData = (await course_model_1.default.findById(courseId));
        if (!courseData) {
            return next(new ErrorHandler_1.default("Course not found", 404));
        }
        if (thumbnail && !thumbnail.startsWith("https")) {
            if (courseData?.thumbnail.public_id) {
                await cloudinary_1.default.v2.uploader.destroy(courseData.thumbnail.public_id);
            }
            const myCloud = await cloudinary_1.default.v2.uploader.upload(thumbnail, {
                folder: "Edumeet Courses",
            });
            data.thumbnail = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            };
        }
        if (thumbnail.startsWith("https")) {
            data.thumbnail = {
                public_id: courseData?.thumbnail.public_id,
                url: courseData?.thumbnail.url,
            };
        }
        // Update course in MongoDB
        const updatedCourse = await course_model_1.default.findByIdAndUpdate(courseId, {
            $set: data,
        }, 
        // { new: true }
        { new: true, runValidators: true });
        await redis_1.redis.set(courseId, JSON.stringify(updatedCourse)); // update course in redis
        res.status(200).json({
            success: true,
            course: updatedCourse,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// get signle course -- without purchasing
exports.getSingleCourse = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const courseId = req.params.id;
        const isCacheExist = await redis_1.redis.get(courseId);
        if (isCacheExist) {
            const course = JSON.parse(isCacheExist);
            res.status(200).json({
                success: true,
                course,
            });
        }
        else {
            const course = await course_model_1.default.findById(req.params.id).select("-courseData.videoUrl -courseData.links -courseData.questions -courseData.suggestion");
            await redis_1.redis.set(courseId, JSON.stringify(course), "EX", 604800);
            res.status(200).json({
                success: true,
                course,
            });
        }
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// get all courses --without purchasing
exports.getAllCourses = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const courses = await course_model_1.default.find().select("-courseData.videoUrl -courseData.links -courseData.questions -courseData.suggestion");
        res.status(200).json({
            success: true,
            courses,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// get course content --only for valid user
exports.getCourseByUser = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const userCourseList = req.user?.courses;
        const courseId = req.params.id;
        const courseExists = userCourseList?.find((course) => course._id.toString() === courseId);
        if (!courseExists) {
            return next(new ErrorHandler_1.default("You are not eligible to access this course", 400));
        }
        const course = await course_model_1.default.findById(courseId);
        const content = course?.courseData;
        res.status(200).json({
            success: true,
            content,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
exports.addQuestion = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const { question, courseId, contentId } = req.body;
        const course = await course_model_1.default.findById(courseId);
        if (!mongoose_1.default.Types.ObjectId.isValid(courseId)) {
            return next(new ErrorHandler_1.default("Invalid content", 400));
        }
        const courseContent = course?.courseData?.find((item) => item._id.equals(contentId));
        if (!courseContent) {
            return next(new ErrorHandler_1.default("Invalid content id", 400));
        }
        // create a question object
        const newQuestion = {
            user: req.user,
            question,
            questionReplies: [],
        };
        // add this question to our course content
        courseContent.questions.push(newQuestion);
        // create notification of new question
        await notification_model_1.default.create({
            user: req.user?._id,
            title: "New Question Recieved!",
            message: `You have new Question in ${courseContent.title}`,
        });
        // save the updated course
        await course?.save();
        res.status(200).json({
            success: true,
            course,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
exports.addAnswer = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    const { answer, courseId, contentId, questionId } = req.body;
    const course = await course_model_1.default.findById(courseId);
    if (!mongoose_1.default.Types.ObjectId.isValid(courseId)) {
        return next(new ErrorHandler_1.default("Invalid content id", 400));
    }
    const courseContent = course?.courseData?.find((item) => item._id.equals(contentId));
    if (!courseContent) {
        return next(new ErrorHandler_1.default("Invalid content id", 400));
    }
    const question = courseContent?.questions?.find((item) => item._id.equals(questionId));
    if (!question) {
        return next(new ErrorHandler_1.default("Invalid question id", 400));
    }
    // create a new answer object
    const newAnswer = {
        user: req.user,
        answer,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    // add this answer to our course content
    question.questionReplies?.push(newAnswer);
    await course?.save();
    if (req.user?._id === question.user._id) {
        // create a notification
        await notification_model_1.default.create({
            user: req.user?._id,
            title: "New Question Reply Recieved!",
            message: `You have new Question reply in ${courseContent.title}`,
        });
    }
    else {
        const data = {
            name: question.user.name,
            title: courseContent.title,
            question: question.question,
            replierName: req.user?.name,
            answer,
        };
        const html = await ejs_1.default.renderFile(path_1.default.join(__dirname, "../mails/question-reply.ejs"), data);
        try {
            await (0, sendMail_1.default)({
                email: question.user.email,
                subject: "Question Reply",
                template: "question-reply.ejs",
                data,
            });
        }
        catch (error) {
            return next(new ErrorHandler_1.default(error.message, 500));
        }
    }
    res.status(200).json({
        success: true,
        course,
    });
    try {
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
exports.addReview = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const userCourseList = req.user?.courses;
        const courseId = req.params.id;
        // check if course-id already exists in user course list based on _id.
        const courseExists = userCourseList?.some((course) => course._id.toString() === courseId.toString());
        if (!courseExists) {
            return next(new ErrorHandler_1.default("You are not eligible to access this course", 400));
        }
        const course = await course_model_1.default.findById(courseId);
        if (!course) {
            return next(new ErrorHandler_1.default("Course not found", 404));
        }
        const { review, rating } = req.body;
        const reviewData = {
            user: req.user,
            rating,
            comment: review,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        course?.reviews.push(reviewData);
        // Rating function & Math
        let avg = 0;
        course?.reviews.forEach((rev) => {
            avg += rev.rating;
        });
        if (course) {
            // one example-> we have 2 reviews one is 5 and another is 4 so math working like this 4+5 => 9/2 => 4.5 ratings
            course.ratings = avg / course.reviews.length;
        }
        await course?.save();
        await redis_1.redis.set(courseId, JSON.stringify(course), "EX", 604800);
        await notification_model_1.default.create({
            userId: req.user?._id,
            title: "New Review Received",
            message: `${req.user?.name} has given a review in ${course?.name}`,
        });
        res.status(200).json({
            success: true,
            course,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
exports.addReplyToReview = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const { comment, courseId, reviewId } = req.body;
        const course = await course_model_1.default.findById(courseId);
        if (!course) {
            return next(new ErrorHandler_1.default("Course Not Found", 404));
        }
        const review = course?.reviews?.find((rev) => rev._id.toString() === reviewId);
        if (!review) {
            return next(new ErrorHandler_1.default("Review Not Found", 404));
        }
        const replyData = {
            user: req.user,
            comment,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        if (!review.commentReplies) {
            review.commentReplies = [];
        }
        review.commentReplies?.push(replyData);
        await course?.save();
        await redis_1.redis.set(courseId, JSON.stringify(course), "EX", 604800);
        res.status(200).json({
            success: true,
            course,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// get all courses --only for admin
exports.getAdminAllCourses = (0, catchAsyncErrors_1.catchAsyncError)(
// export const getCourses = catchAsyncError(
async (req, res, next) => {
    try {
        // getAllCourseService(res);
        await (0, course_service_1.getAllCourseService)(res);
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
// delete course -- only for admin
exports.deleteCourse = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const { id } = req.params;
        const course = await course_model_1.default.findById(id);
        if (!course) {
            return next(new ErrorHandler_1.default("Course Not Found", 404));
        }
        await course.deleteOne({ id });
        await redis_1.redis.del(id);
        res.status(200).json({
            success: true,
            message: "Course deleted successfully",
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// generate video url
exports.generateVideoUrl = (0, catchAsyncErrors_1.catchAsyncError)(async (req, res, next) => {
    try {
        const { videoId } = req.body;
        const response = await axios_1.default.post(`https://dev.vdocipher.com/api/videos/${videoId}/otp`, { ttl: 300 }, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Apisecret ${process.env.VDOCIPHER_API_SECRET}`,
            },
        });
        res.json(response.data);
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
