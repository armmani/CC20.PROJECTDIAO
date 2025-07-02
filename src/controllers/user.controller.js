import prisma from "../configs/prisma.config.js";
import createErrorUtil from "../utils/createError.util.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  try {
    const result = await prisma.user.findMany({
      omit: { password: true },
    });
    
    res.json({ message: "Get ALL Users", result });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await prisma.user.findMany({
      where: {
        id: +id,
      },
      omit: { password: true },
    });

    res.json({ message: "Get User by ID", result });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({
      where: { username },
    });
    if (user) {
      createErrorUtil(400, "Username is already EXISTED");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const result = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
      },
      omit: { password: true },
    });
    res.json({ message: "Create New User Successful", result });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, password, role, status } = req.body;
    console.log("id, role", id, role);
    const user = await prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        username,
        password,
        role,
        status,
      },
      omit: { password: true },
    });

    res.json({ message: "Update User Successful", user });
  } catch (error) {
    next(error);
  }
};
