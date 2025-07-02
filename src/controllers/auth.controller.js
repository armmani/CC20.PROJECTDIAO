import prisma from "../configs/prisma.config.js";
import createErrorUtil from "../utils/createError.util.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log("username", username);
    const user = await prisma.user.findFirst({
      where: { username },
    });
    console.log(user);
    if (user) {
      createErrorUtil(400, "Username is already EXISTED");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log("hashPassword", hashPassword);

    const result = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
      },
      omit: { password: true },
    });
    res.json({ message: "Register Successful", result });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({
      where: { username },
    });
    console.log("user", user);
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

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "3d" },
    );
    res.json({
      message: `Welcome ${user.username} as ${user.role}`,
      payload,
      token,
    })
  } catch (error) {
    next(error);
  }
};
