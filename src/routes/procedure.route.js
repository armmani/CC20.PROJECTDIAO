import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createProcedure,
  deleteProcedure,
  getAllProcedures,
  getProcedureById,
  updateProcedure,
} from "../controllers/procedure.controller.js";

const procedureRoute = express.Router();

// Endpoint http://localhost:6969/procedures

procedureRoute.get("/", authMiddleware, getAllProcedures);
procedureRoute.get("/", authMiddleware, getProcedureById);
procedureRoute.post("/", authMiddleware, createProcedure);
procedureRoute.patch("/", authMiddleware, updateProcedure);
procedureRoute.delete("/", authMiddleware, deleteProcedure);

export default procedureRoute