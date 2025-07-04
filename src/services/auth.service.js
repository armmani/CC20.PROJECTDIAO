import prisma from "../configs/prisma.config.js";

export const findUser = async (username) => {
  const user = await prisma.user.findFirst({
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
  const result = await prisma.user.findFirst({
    where: { username },
  });
  return result;
};
