import express from "express";
import {
  createVisit,
  getAllVisits,
  getVisitById,
  updateVisit,
} from "../controllers/visit.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { visitAddMedication, visitAllMedications } from "../controllers/visit-medication.controller.js";
import { visitAddProcedure, visitAllProcedures } from "../controllers/visit-procedure.controller.js";

const visitRoute = express.Router();

// Endpoint http://localhost:6969/visits
visitRoute.get("/", authMiddleware, getAllVisits);
visitRoute.get("/:id", authMiddleware, getVisitById);
visitRoute.post("/", authMiddleware, createVisit);
visitRoute.patch("/:id", authMiddleware, updateVisit);

// Visit-Medication
visitRoute.get("/:visitId/medications", authMiddleware, visitAllMedications);
visitRoute.post("/:visitId/medications", authMiddleware, visitAddMedication);

//Visit-Procedure
visitRoute.get("/:visitId/procedures", authMiddleware, visitAllProcedures);
visitRoute.post("/:visitId/procedures", authMiddleware, visitAddProcedure);

export default visitRoute;
