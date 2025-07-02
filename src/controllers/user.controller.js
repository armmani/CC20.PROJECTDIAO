import { createError } from "../utils/createError.js";

export const getAllUsers = (req, res) => {
  try {
    if (true) {
      createError(400, "Email is already existed")
    } else {
      throw new Error("Password is INVALID")
    }
    res.json({ message: "Get ALL Users" });
  } catch (error) {
    next(error);
  }
};

export const getUserById = (req, res) => {
  res.json({ message: "Get User by ID" });
};

export const createUser = (req, res) => {
  res.json({ message: "Create New User" });
};

export const updateUser = (req, res) => {
  res.json({ message: "Update User" });
};
