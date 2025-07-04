import prisma from "../configs/prisma.config.js";

export const getAllPets = async (req, res, next) => {
  try {
    const result = await prisma.pet.findMany();
    res.json({ message: "Pet List", result });
  } catch (error) {
    next(error);
  }
};

export const getPetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await prisma.pet.findMany({
      where: {
        id: +id,
      },
    });
    res.json({ message: "Pet Data Retrieved Successfully", result });
  } catch (error) {
    next(error);
  }
};

export const createPet = async (req, res, next) => {
  try {
    const {
      pet_name,
      species,
      breed,
      gender,
      sterilization,
      birth_date,
      status,
      ownerId,
    } = req.body;
    const creatorId = req.user.id;
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
    res.json({ message: "Pet Created", result });
  } catch (error) {
    next(error);
  }
};

export const updatePet = async (req, res, next) => {
  try {
    const {
      pet_name,
      species,
      breed,
      gender,
      sterilization,
      birth_date,
      status,
    } = req.body;
    const updaterId = req.user.id;
    const result = await prisma.pet.update({
      data: {
        pet_name,
        species,
        breed,
        gender,
        sterilization,
        birth_date,
        status,
        updater: {
          connect: { id: updaterId },
        },
      },
    });
    res.json({ message: "Pet Updated", result });
  } catch (error) {
    next(error);
  }
};

export const getPetByOwner = async (req, res, next) => {
  try {
    const { ownerId } = req.params;
    const result = await prisma.pet.findMany({
      where: {
        ownerId: +ownerId,
      },
    });
    res.json({ message: `Pets of Owner ID ${ownerId}`, result });
  } catch (error) {
    next(error);
  }
};
