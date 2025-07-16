import prisma from "../configs/prisma.config.js";

export const visitAllProcedures = async (visitId) => {
  const result = await prisma.visitProcedure.findMany({
    where: {
      visitId: +visitId,
    },
    include: {
      procedure: true,
    },
  });
  return result;
};

export const visitAddProcedure = async ({
  quantity,
  unit,
  notes,
  cost,
  procedureId,
  creatorId,
  visitId,
}) => {
  const result = await prisma.visitProcedure.create({
    data: {
      quantity,
      unit,
      notes,
      cost,
      creator: {
        connect: { id: +creatorId },
      },
      visit: {
        connect: { id: +visitId },
      },
      procedure: {
        connect: { id: +procedureId },
      },
    },
  });
  // console.log("result service", result);
  return result;
};

export const visitUpdateProcedure = async ({
  id,
  quantity,
  unit,
  notes,
  cost,
  visitId,
  procedureId,
  updaterId,
}) => {
  const result = await prisma.visitProcedure.update({
    where: {
      id: +id,
    },
    data: {
      quantity,
      unit,
      notes,
      cost,
      visit: {
        connect: { id: +visitId },
      },
      procedure: {
        connect: { id: +procedureId },
      },
      updater: {
        connect: { id: +updaterId },
      },
    },
  });
  return result;
};

export const visitDeleteProcedure = async (id) => {
  const result = await prisma.visitProcedure.delete({
    where: {
      id: +id,
    },
  });
  return result;
};
