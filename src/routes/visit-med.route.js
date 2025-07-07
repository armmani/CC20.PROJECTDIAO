import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { visitDelelteMedication, visitUpdateMedication } from "../controllers/visit-medication.controller.js"

const visitMedRoute = express.Router()

visitMedRoute.patch('/:id', authMiddleware, visitUpdateMedication)
visitMedRoute.delete('/:id', authMiddleware, visitDelelteMedication)

export default visitMedRoute