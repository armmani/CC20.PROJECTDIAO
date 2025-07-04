import prisma from "../configs/prisma.config.js";

export const getAllProcedures = async (req, res, next) => {
  const result = await prisma.procedure.findMany();
  return result;
};

export const getProcedureById = async (id) => {
  const result = await prisma.procedure.findUnique(id);
  return result;
};

export const createProcedure = async (name, description, cost, creatorId) => {
  const result = await prisma.procedure.create({
    data: {
      name,
      description,
      cost,
      creatorId
    },
  });
  return result;
};

export const updateProcedure = async (id, name, description, cost) => {
  const result = await prisma.procedure.update({
    where: {
      id: +id,
    },
    data: {
      name,
      description,
      cost,
    },
  });
  return result;
};

export const deleteProcedure = async (id) => {
  const result = await prisma.procedure.delete({
    where: {
      id: +id,
    },
  });
  return result;
};
