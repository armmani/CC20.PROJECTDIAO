import express from "express";
import { createUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.get("/:id", getUserById);
userRoute.post("/", createUser);
userRoute.patch("/:id", updateUser);

export default userRoute