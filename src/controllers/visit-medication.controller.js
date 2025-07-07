import * as visitMedService from "../services/visit-medication.service.js";
import createErrorUtil from "../utils/createError.util.js";

export const visitAllMedications = async (req, res, next) => {
  try {
    const { visitId } = req.params;
    const result = await visitMedService.visitAllMedications(visitId);
    if( result.length === 0) {
      createErrorUtil(200, "No Medication for This Visit")
    }
    res.json({ message: `All Medications for Visit ID ${visitId}`, result });
  } catch (error) {
    next(error);
  }
};
export const visitAddMedication = async (req, res, next) => {
  try {
    const { visitId } = req.params;
    const creatorId = req.user.id;
    const { dosage, frequency, quantity, notes, cost, medicationId } = req.body;
    const result = await visitMedService.visitAddMedication(
      dosage,
      frequency,
      quantity,
      notes,
      cost,
      creatorId,
      visitId,
      medicationId
    );
    res.json({ message: "Medication Added to This Visit", result });
  } catch (error) {
    next(error);
  }
};
export const visitUpdateMedication = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log('id', id)
    const updaterId = req.user.id;
    // console.log('updaterId', updaterId)
    const { dosage, frequency, quantity, notes, cost, visitId, medicationId } =
      req.body;
    const result = await visitMedService.visitUpdateMedication({
      id,
      dosage,
      frequency,
      quantity,
      notes,
      cost,
      updaterId,
      visitId,
      medicationId,
    });
    // console.log('result', result)
    res.json({ message: `Medication ID ${medicationId} Updated to Visit ID ${id}`, result });
  } catch (error) {
    next(error);
  }
};

export const visitDelelteMedication = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await visitMedService.visitDelelteMedication(id);
    res.json({ message: `VisitMedication ID ${id} was Deleted`, result });
  } catch (error) {
    next(error);
  }
};
