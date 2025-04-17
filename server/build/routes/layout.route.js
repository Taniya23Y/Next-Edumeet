"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { getLayoutByType } from "./../controllers/layout.controller";
const express_1 = __importDefault(require("express"));
const layout_controller_1 = require("../controllers/layout.controller");
const auth_1 = require("../middleware/auth");
const user_controller_1 = require("../controllers/user.controller");
// Initializing ROUTER
const layoutRouter = express_1.default.Router();
layoutRouter.post("/create-layout", auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), layout_controller_1.createLayout);
layoutRouter.put("/edit-layout", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), layout_controller_1.editLayout);
layoutRouter.get("/get-layout/:type", layout_controller_1.getLayoutByType);
exports.default = layoutRouter;
