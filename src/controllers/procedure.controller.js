import * as procedureService from "../services/procedure.service.js";

export const getAllProcedures = async (req, res, next) => {
  try {
    const result = await procedureService.getAllProcedures();
    if (result.length === 0) {
      return res.json({ message: "No Procedures Found", result });
    }
    res.json({ message: "All Procedures", result });
  } catch (error) {
    next(error);
  }
};

export const getProcedureById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await procedureService.getProcedureById(id);
    if (!result) {
      createErrorUtil(404, "Procedure Not Found");
    }
  } catch (error) {
    next(error);
  }
};

export const createProcedure = async (req, res, next) => {
  try {
    const { name, description, cost } = req.body;
    const creatorId = req.user.id;
    const result = await procedureService.createProcedure(
      name,
      description,
      cost,
      creatorId
    );
    res.json({ message: "Procedure Created", result });
  } catch (error) {
    next(error);
  }
};

export const updateProcedure = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, cost } = req.body;
    const updaterId = req.user.id;
    const result = await procedureService.updateMed(
      +id,
      name,
      description,
      cost,
      updaterId
    );
    if (!result) {
      createErrorUtil(404, "Procedure Not Found");
    }
    res.json({ message: "Procedure Updated", result });
  } catch (error) {
    next(error);
  }
};

export const deleteProcedure = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await procedureService.deleteProcedure(id);
    if (!result) {
      createErrorUtil(404, "Procedure Not Found");
    }
    res.json({ message: "Procedure Deleted", result });
  } catch (error) {
    next(error);
  }
};
