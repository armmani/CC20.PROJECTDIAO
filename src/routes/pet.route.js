import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createPet,
  getAllPets,
  getPetById,
  updatePet,
} from "../controllers/pet.controller.js";

const petRoute = express.Router();

// Endpoint http://localhost:6969/pets
petRoute.get("/", authMiddleware, getAllPets);
petRoute.get("/:id", authMiddleware, getPetById);
petRoute.post("/", authMiddleware, createPet);
petRoute.patch("/:id", authMiddleware, updatePet);

export default petRoute;
