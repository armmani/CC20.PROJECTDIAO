import prisma from "../configs/prisma.config.js";

export const getAllOwners = async () => {
  const result = await prisma.owner.findMany();
  return result;
};

export const getOwnerById = async (id) => {
  const result = await prisma.owner.findFirst({
    where: {
      id: +id,
    },
  });
  return result;
};

export const findOwnerTelNum = async (tel_number) => {
  const result = await prisma.owner.findFirst({
    where: { tel_number },
  });
  return result;
};

export const createOwner = async (
  owner_name,
  tel_number,
  line_id,
  address,
  creatorId
) => {
  const result = await prisma.owner.create({
    data: {
      owner_name,
      tel_number,
      line_id,
      address,
      creator: {
        connect: {
          id: +creatorId,
        },
      },
    },
  });
  return result;
};

export const updateOwner = async (id, owner_name, tel_number, line_id, address, updaterId) => {
  const result = await prisma.owner.update({
    where: {
      id: +id,
    },
    data: {
      owner_name,
      tel_number,
      line_id,
      address,
      updater: {
        connect: {
          id: +updaterId,
        },
      },
    },
  });
  return result;
};
