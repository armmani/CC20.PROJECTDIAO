import createErrorUtil from "../utils/createError.util.js";
import * as ownerService from "../services/owner.service.js";

export const getAllOwners = async (req, res, next) => {
  try {
    const result = await ownerService.getAllOwners();
    if(!result) {createErrorUtil(404, "No Owner Registed")}
    res.json({ message: "Owner List", result });
  } catch (error) {
    next(error);
  }
};

export const getOwnerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ownerService.getOwnerById(id);
    if (!result) {
      createErrorUtil(404, `Not Found Owner ID ${id}`);
    }
    res.json({ message: "Owner Data Retrieved Successfully", result });
  } catch (error) {
    next(error);
  }
};

export const createOwner = async (req, res, next) => {
  try {
    const { owner_name, tel_number, line_id, address, status } = req.body;
    const creatorId = req.user.id;
    const findOwner = await ownerService.findOwnerTelNum(tel_number);
    if (findOwner) {
      createErrorUtil(400, "Telephone Number already exists");
    }
    const result = await ownerService.createOwner(
      owner_name,
      tel_number,
      line_id,
      address,
      status,
      creatorId
    );
    res.json({ message: "Owner Created", result });
  } catch (error) {
    next(error);
  }
};

export const updateOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updaterId = req.user.id;
    const { owner_name, tel_number, line_id, address, status } = req.body;
    const result = await ownerService.updateOwner(
      +id,
      owner_name,
      tel_number,
      line_id,
      address,
      status,
      updaterId
    );
    res.json({ message: "Owner Updated", result });
  } catch (error) {
    next(error);
  }
};
