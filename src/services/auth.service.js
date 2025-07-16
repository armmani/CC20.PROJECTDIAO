import prisma from "../configs/prisma.config.js";
import bcrypt from "bcryptjs";
import createErrorUtil from "../utils/createError.util.js";

export const findUser = async (username) => {
  const user = await prisma.user.findUnique({
    where: { username },
  });
  return user;
};

export const register = async (username, hashPassword) => {
  const result = await prisma.user.create({
    data: {
      username,
      password: hashPassword,
    },
    omit: { password: true },
  });
  return result;
};

export const login = async (username, password) => {
  const user = await findUser(username);
  if (!user) {
    createErrorUtil(400, "Invalid username or password");
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    createErrorUtil(400, "Invalid username or password");
  }

  if (user.status === "INACTIVE") {
    createErrorUtil(403, "This Account has been Deactivated");
  }
 
  return user;
};
