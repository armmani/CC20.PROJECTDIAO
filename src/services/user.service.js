import prisma from "../configs/prisma.config.js";

export const getAllUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};

export const getUserById = async (id) => {
  const result = await prisma.user.findFirst({
    where: {
      id: +id,
    },
  });
  return result;
};

export const createUser = async (username, hashPassword) => {
  const result = await prisma.user.create({
    data: {
      username,
      password: hashPassword,
    },
  });
  return result;
};

export const updateUser = async (id, username, password, role, status) => {
  const result = await prisma.user.update({
    where: {
      id: +id,
    },
    data: {
      username,
      password,
      role,
      status,
    },
  });
  return result;
};
