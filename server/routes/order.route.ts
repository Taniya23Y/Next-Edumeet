import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";

// Initialization router
const orderRouter = express.Router();

// api paths
orderRouter.post("/create-order", isAuthenticated, createOrder);

orderRouter.get(
  "/get-orders",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllOrders
);

export default orderRouter;
