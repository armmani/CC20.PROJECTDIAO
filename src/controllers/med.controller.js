import * as medService from "../services/med.service.js";
import createErrorUtil from "../utils/createError.util.js";

export const getAllMeds = async (req, res, next) => {
  try {
    const result = await medService.getAllMeds();
    // console.log('result', result)
    if (result.length === 0) {
      return res.json({ message: "No Medications Found", result });
    }
    res.json({ message: "All Medicines", result });
  } catch (error) {
    next(error);
  }
};

export const getMedById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await medService.getMedById(id);
    if (!result) {
      createErrorUtil(404, "Medication Not Found");
    }
  } catch (error) {
    next(error);
  }
};

export const createMed = async (req, res, next) => {
  try {
    const { name, type, unit, cost } = req.body;
    const creatorId = req.user.id;
    const result = await medService.createMed(
      name,
      type,
      unit,
      cost,
      creatorId
    );
    res.json({ message: "Medication Created", result });
  } catch (error) {
    next(error);
  }
};

export const updateMed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, type, unit, cost } = req.body;
    const result = await medService.updateMed(name, type, unit, cost);
    if (!result) {
      createErrorUtil(404, "Medication Not Found");
    }
    res.json({ message: "Medication Updated", result });
  } catch (error) {
    next(error);
  }
};

export const deleteMed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await medService.deleteMed(id);
    if (!result) {
      createErrorUtil(404, "Medication Not Found");
    }
    res.json({ message: "Medication Deleted", result });
  } catch (error) {
    next(error);
  }
};
