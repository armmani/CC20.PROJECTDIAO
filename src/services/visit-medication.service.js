import prisma from "../configs/prisma.config.js";

export const visitAllMedications = async (visitId) => {
  const result = await prisma.visitMedication.findMany({
    where: {
      visitId: +visitId,
    },
  });
  return result;
};

export const visitAddMedication = async (
  dosage,
  frequency,
  quantity,
  notes,
  cost,
  creatorId,
  visitId,
  medicationId
) => {
  const result = await prisma.visitMedication.create({
    data: {
      dosage,
      frequency,
      quantity,
      notes,
      cost,
      creator: {
        connect: { id: +creatorId },
      },
      visit: {
        connect: { id: +visitId },
      },
      medication: {
        connect: { id: +medicationId },
      },
    },
  });
  return result;
};

export const visitUpdateMedication = async ({
  id,
  dosage,
  frequency,
  quantity,
  notes,
  cost,
  updaterId,
  visitId,
  medicationId,
}) => {
  const result = await prisma.visitMedication.update({
    where: {
      id: +id,
    },
    data: {
      dosage,
      frequency,
      quantity,
      notes,
      cost,
      updater: {
        connect: { id: +updaterId },
      },
      visit: {
        connect: { id: +visitId },
      },
      medication: {
        connect: { id: +medicationId },
      },
    },
  });
  // console.log('resultcontroller', result)
  return result;
};

export const visitDelelteMedication = async (id) => {
  const result = await prisma.visitMedication.delete({
    where: {
      id: +id,
    },
  });
  return result;
};
