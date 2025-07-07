import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { visitDeleteProcedure, visitUpdateProcedure } from "../controllers/visit-procedure.controller.js";

const visitProcRoute = express.Router()

visitProcRoute.patch('/:id', authMiddleware, visitUpdateProcedure)
visitProcRoute.delete('/:id', authMiddleware, visitDeleteProcedure)

export default visitProcRoute