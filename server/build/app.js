"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv").config();
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const error_1 = require("./middleware/error");
const user_route_1 = __importDefault(require("./routes/user.route"));
const course_route_1 = __importDefault(require("./routes/course.route"));
const order_route_1 = __importDefault(require("./routes/order.route"));
const notification_route_1 = __importDefault(require("./routes/notification.route"));
const analytics_route_1 = __importDefault(require("./routes/analytics.route"));
const layout_route_1 = __importDefault(require("./routes/layout.route"));
const express_rate_limit_1 = require("express-rate-limit");
// cookie-parser
exports.app.use((0, cookie_parser_1.default)());
// body parser
exports.app.use(express_1.default.json({ limit: "50mb" }));
// cors => cross origin resource sharing
exports.app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
}));
// api request limit
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: "draft-7", // drafts-6: RateLimit-* headers; drafts-7: combined RateLimit header
    legacyHeaders: false, // X-RateLimit-* headers
    // store: .... // use an external store for more precise rate limiting
});
// routes
// app.use("/api/v1", userRouter, courseRouter, orderRouter, notificationRoute, analyticsRouter, layoutRouter);
exports.app.use("/api/v1", user_route_1.default);
exports.app.use("/api/v1", course_route_1.default);
exports.app.use("/api/v1", order_route_1.default);
exports.app.use("/api/v1", notification_route_1.default);
exports.app.use("/api/v1", analytics_route_1.default);
exports.app.use("/api/v1", layout_route_1.default);
// testing api
exports.app.get("/test", (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "API is Working",
    });
});
// unKnown route
exports.app.all("*", (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`);
    err.statusCode = 404;
    next(err);
});
// rate limiting middleware to API calls only
exports.app.use(limiter);
exports.app.use(error_1.ErrorMiddleware);
