import prisma from "../configs/prisma.config.js";

export const getAllVisits = async () => {
  const result = await prisma.visit.findMany();
  return result;
};

export const getVisitById = async (id) => {
  const result = await prisma.visit.findFirst({
    where: {
      id: +id,
    },
  });
  return result;
};

export const createVisit = async (
  cc,
  hx,
  pe,
  weight,
  dx,
  cost,
  petId,
  creatorId
) => {
  const result = await prisma.visit.create({
    data: {
      cc,
      hx,
      pe,
      weight,
      dx,
      cost,
      creator: {
        connect: { id: +creatorId },
      },
      pet: {
        connect: { id: +petId },
      },
    },
  });
  return result;
};

export const updateVisit = async (
  id,
  cc,
  hx,
  pe,
  weight,
  dx,
  cost,
  petId,
  updaterId
) => ({
  where: {
    id: +id,
  },
  data: {
    cc,
    hx,
    pe,
    weight,
    dx,
    cost,
    updater: {
      connect: { id: +updaterId },
    },
    pet: {
      connect: { id: +petId },
    },
  },
});
