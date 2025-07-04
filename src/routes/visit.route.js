import express from "express";
import { createVisit, getAllVisits, getVisitById, updateVisit } from "../controllers/visit.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const visitRoute = express.Router();

// Endpoint http://localhost:6969/visits
visitRoute.get("/", authMiddleware, getAllVisits );
visitRoute.get("/:id", authMiddleware, getVisitById);
visitRoute.post("/", authMiddleware, createVisit );
visitRoute.patch("/:id", authMiddleware, updateVisit);

export default visitRoute;
