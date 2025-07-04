import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createMed, deleteMed, getAllMeds, getMedById, updateMed } from "../controllers/med.controller.js";

const medRoute = express.Router();

// Endpoint http://localhost:6969/medications
medRoute.get("/", authMiddleware, getAllMeds);
medRoute.get("/:id", authMiddleware, getMedById);
medRoute.post("/", authMiddleware, createMed);
medRoute.patch("/:id", authMiddleware, updateMed);
medRoute.delete("/:id", authMiddleware, deleteMed);

export default medRoute;
