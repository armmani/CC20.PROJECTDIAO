import express from "express";
import {
  createOwner,
  getAllOwners,
  getOwnerById,
  updateOwner,
} from "../controllers/owner.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getPetByOwner } from "../controllers/pet.controller.js";

const ownerRoute = express.Router();
// Endpoint http://localhost:6969/owners

ownerRoute.get("/",authMiddleware, getAllOwners);
ownerRoute.get("/:id", authMiddleware, getOwnerById);
ownerRoute.post("/",authMiddleware, createOwner);
ownerRoute.patch("/:id", authMiddleware, updateOwner);
ownerRoute.get("/:ownerId/pets", authMiddleware, getPetByOwner)

export default ownerRoute