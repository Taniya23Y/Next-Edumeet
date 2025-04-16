"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const analytics_controller_1 = require("../controllers/analytics.controller");
const auth_1 = require("../middleware/auth");
const user_controller_1 = require("../controllers/user.controller");
// Initializing Router
const analyticsRouter = express_1.default.Router();
analyticsRouter.get("/get-users-analytics", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), analytics_controller_1.getUsersAnalytics);
analyticsRouter.get("/get-courses-analytics", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), analytics_controller_1.getCoursesAnalytics);
analyticsRouter.get("/get-orders-analytics", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), analytics_controller_1.getOrdersAnalytics);
exports.default = analyticsRouter;
