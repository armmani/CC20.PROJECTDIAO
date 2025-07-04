import createErrorUtil from "../utils/createError.util.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as authService from '../services/auth.service.js'

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await authService.findUser(username)
    if (user) {
      createErrorUtil(400, "Username is already EXISTED");
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const result = await authService.register(username, password, hashPassword);
    res.json({ message: "Register Successful", result });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await authService.login(username, password)

    if (!user) {
      createErrorUtil(400, "Login Username or Password is not Correct");
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      createErrorUtil(400, "Login Username or Password is not Correct");
    }

    const payload = {
      id: user.id,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3d",
      algorithm: "HS256"
    });
    res.json({
      message: `Welcome ${user.username} as ${user.role}`,
      payload,
      token,
    });
  } catch (error) {
    next(error);
  }
};
