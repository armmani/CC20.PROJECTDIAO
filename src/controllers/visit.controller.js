import createErrorUtil from "../utils/createError.util.js";
import * as visitService from "../services/visit.service.js";

export const getAllVisits = async (req, res, next) => {
  try {
    const result = await visitService.getAllVisits();
    if (!result) {
      createErrorUtil(404, "No Visit Data");
    }
    res.json({ message: "Visiting List", result });
  } catch (error) {
    next(error);
  }
};

export const getVisitById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await visitService.getVisitById(id);
    if (!result) {
      createErrorUtil(404, `Not Found Visit ID ${id}`);
    }
    if (!result) {
      createErrorUtil(404, "No Visit Data");
    }
    res.json({ message: `Visit ID ${id}`, result });
  } catch (error) {
    next(error);
  }
};

export const createVisit = async (req, res, next) => {
  try {
    const { cc, hx, pe, weight, dx, cost, petId } = req.body;
    const creatorId = req.user.id;
    const result = await visitService.createVisit(
      cc,
      hx,
      pe,
      weight,
      dx,
      cost,
      petId,
      creatorId
    );
    res.json({ message: "Visit created", result });
  } catch (error) {
    next(error);
  }
};

export const updateVisit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cc, hx, pe, weight, dx, cost, petId } = req.body;
    const updaterId = req.user.id;
    const result = await visitService.updateVisit(
      id,
      cc,
      hx,
      pe,
      weight,
      dx,
      cost,
      petId,
      updaterId
    );
    if (!result) {
      createErrorUtil(404, "No Visit Data");
    }
    res.json({ message: "Visit Updated", result });
  } catch (error) {
    next(error);
  }
};
