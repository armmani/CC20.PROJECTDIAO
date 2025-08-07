import * as visitProcService from "../services/visit-procedure.service.js";
import createErrorUtil from "../utils/createError.util.js";

export const visitAllProcedures = async (req, res, next) => {
  try {
    const { visitId } = req.params;
    const result = await visitProcService.visitAllProcedures(visitId);
    if (result.length === 0) {
      createErrorUtil(200, "No Procedure for This Visit");
    }
    res.json({ message: `All Procedures for Visit ID ${visitId}`, result });
  } catch (error) {
    next(error);
  }
};

export const visitAddProcedure = async (req, res, next) => {
  try {
    const { visitId } = req.params;
    const creatorId = req.user.id;

    const { quantity, unit, notes, cost, procedureId } = req.body;

    const result = await visitProcService.visitAddProcedure({
      quantity,
      unit,
      notes,
      cost,
      creatorId,
      visitId,
      procedureId,
    });
    if (!result) {
      createErrorUtil(404, "Not Found Procedure or Visit");
    }
    res.json({ message: `Procedure Added to Visit ID ${visitId}`, result });
  } catch (error) {
    next(error);
  }
};

export const visitUpdateProcedure = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('req.params', req.params)
    const updaterId = req.user.id;
    console.log('req.user.id', req.user.id)
    const { quantity, unit, notes, cost, visitId, procedureId } = req.body;
    console.log('req.body', req.body)
    const result = await visitProcService.visitUpdateProcedure({
      id,
      quantity,
      unit,
      notes,
      cost,
      visitId,
      procedureId,
      updaterId,
    });
    if (!result) {
      createErrorUtil(404, "Not Found Visit or Procedure");
    }
    res.json({
      message: `Procedure ID ${procedureId} Updated to Visit ID ${visitId}`,
      result,
    });
  } catch (error) {
    next(error);
  }
};

export const visitDeleteProcedure = async (req, res, next) => {
  try {
    const {id} = req.params
    const result = await visitProcService.visitDeleteProcedure(id)
    res.json({message: `VisitProcedure ID ${id} was Deleted`})
  } catch (error) {
    next(error);
  }
};
