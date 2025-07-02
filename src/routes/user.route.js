import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRoute = express.Router();

// Endpoint http://localhost:6969/users
userRoute.get("/", getAllUsers);
userRoute.get("/:id", authMiddleware, getUserById);
userRoute.post("/", createUser);
userRoute.patch("/:id", authMiddleware, updateUser);

export default userRoute;
