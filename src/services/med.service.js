import prisma from "../configs/prisma.config.js";

export const getAllMeds = async (req, res, next) => {
  const result = await prisma.medication.findMany();
  return result;
};

export const getMedById = async (id) => {
  const result = await prisma.medication.findUnique(id);
  return result;
};

export const createMed = async (name, type, unit, cost, creatorId) => {
  const result = await prisma.medication.create({
    data: {
      name,
      type,
      unit,
      cost,
      creator: {
        connect: { id: +creatorId },
      },
    },
  });
  return result;
};

export const updateMed = async (id, name, type, unit, cost, updaterId) => {
  const result = await prisma.medication.update({
    where: {
      id: +id,
    },
    data: {
      name,
      type,
      unit,
      cost,
      updater: {
        connect: { id: +updaterId },
      },
    },
  });
  return result;
};

export const deleteMed = async (id) => {
  const result = await prisma.medication.delete({
    where: {
      id: +id,
    },
  });
  return result;
};
