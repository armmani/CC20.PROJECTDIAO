import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { loginSchema, registerSchema, validate } from "../validations/validator.js";




const authRoute = express.Router();

authRoute.post("/register", validate(registerSchema), register);
authRoute.post("/login",validate(loginSchema), login);

export default authRoute;
