import prisma from "../configs/prisma.config.js";



export const getPetById = async (id) => {
  const result = await prisma.pet.findUnique({
    where: {
      id: +id,
    },
  });
  return result;
};

export const createPet = async (
  pet_name,
  species,
  breed,
  gender,
  sterilization,
  birth_date,
  status,
  ownerId,
  creatorId
) => {
  const result = await prisma.pet.create({
    data: {
      pet_name,
      species,
      breed,
      gender,
      sterilization,
      birth_date,
      status,
      owner: {
        connect: { id: +ownerId },
      },
      creator: {
        connect: { id: +creatorId },
      },
    },
  });
  return result;
};

export const updatePet = async (
  id,
  pet_name,
  species,
  breed,
  gender,
  sterilization,
  birth_date,
  status,
  updaterId
) => {
  const result = await prisma.pet.update({
    where:{
      id: +id
    },
    data: {
      pet_name,
      species,
      breed,
      gender,
      sterilization,
      birth_date,
      status,
      updater: {
        connect: { id: +updaterId },
      },
    },
  });
  return result
};

export const getPetByOwner = async (ownerId) => {
  const result = await prisma.pet.findMany({
    where: {
      ownerId: +ownerId
    }
  })
  return result
}