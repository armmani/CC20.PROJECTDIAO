import createErrorUtil from "../utils/createError.util.js";
import bcrypt from "bcryptjs";
import * as userService from "../services/user.service.js";
import * as authService from "../services/auth.service.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers();
    res.json({ message: "List ALL Users", result });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userService.getUserById(id);
    if (!result) {
      createErrorUtil(404, `Not Found User ID ${id}`);
    }
    res.json({ message: `This is User ID ${id}`, result });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await authService.findUser(username);
    if (user) {
      createErrorUtil(400, "Username is already EXISTED");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const result = await userService.createUser(username, hashPassword)
    res.json({ message: "Create New User Successful", result });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, password, role, status } = req.body;
    const user = await userService.updateUser(id, username, password, role, status)

    res.json({ message: "Update User Successful", user });
  } catch (error) {
    next(error);
  }
};
