import { app } from "./app";
import { v2 as cloudinary } from "cloudinary";
import http from "http";
import connectDB from "./utils/db";
import { initSocketServer } from "./socketServer";
require("dotenv").config();

// Create HTTP server
const server = http.createServer(app);

// cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// Initialize Socket Server
initSocketServer(server);

// start server
server.listen(process.env.PORT, () => {
  console.log(`✅ Server is connected with ${process.env.PORT}`);
  connectDB();
});
