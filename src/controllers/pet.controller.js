import createErrorUtil from "../utils/createError.util.js";
import * as petService from "../services/pet.service.js";

export const getAllPets = async (req, res, next) => {
  try {
    const result = await petService.getAllPets();
    if (!result) {
      createErrorUtil(404, "No Pet Registered");
    }
    res.json({ message: "Pet List", result });
  } catch (error) {
    next(error);
  }
};

export const getPetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await petService.getPetById(id);
    if (!result) {
      createErrorUtil(404, `Not Found This Pet ID ${id}`);
    }
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
    const result = await petService.createPet(
      pet_name,
      species,
      breed,
      gender,
      sterilization,
      birth_date,
      status,
      ownerId,
      creatorId
    );
    res.json({ message: "Pet Created", result });
  } catch (error) {
    next(error);
  }
};

export const updatePet = async (req, res, next) => {
  try {
    const { id } = req.params;
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
    const result = await petService.updatePet(
      +id,
      pet_name,
      species,
      breed,
      gender,
      sterilization,
      birth_date,
      status,
      updaterId
    );
    res.json({ message: "Pet Updated", result });
  } catch (error) {
    next(error);
  }
};

export const getPetByOwner = async (req, res, next) => {
  try {
    const { ownerId } = req.params;
    const result = await petService.getPetByOwner(ownerId)
    res.json({ message: `Pets of Owner ID ${ownerId}`, result });
  } catch (error) {
    next(error);
  }
};
