import prisma from "../configs/prisma.config.js";
import createErrorUtil from "../utils/createError.util.js";

export const getAllOwners = async (req, res, next) => {
  try {
    const result = await prisma.owner.findMany();
    res.json({ message: "Owner List", result });
  } catch (error) {
    next(error);
  }
};

export const getOwnerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await prisma.owner.findMany({
      where: {
        id: +id,
      },
    });
    res.json({ message: "Owner Data Retrieved Successfully", result });
  } catch (error) {
    next(error);
  }
};

export const createOwner = async (req, res, next) => {
  try {
    const { owner_name, tel_number, line_id, address } = req.body;
    const creatorId = req.user.id;
    const findOwner = await prisma.owner.findFirst({
      where: { tel_number },
    });
    if (findOwner) {
      createErrorUtil(400, "Telephone Number already exists");
    }
    const result = await prisma.owner.create({
      data: {
        owner_name,
        tel_number,
        line_id,
        address,
        creator: {
          connect: {
            id: creatorId,
          },
        },
      },
    });
    res.json({ message: "Owner Created", result });
  } catch (error) {
    next(error);
  }
};

export const updateOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updaterId = req.user.id
    const { owner_name, tel_number, line_id, address } = req.body;
    const result = await prisma.owner.update({
      where: {
        id: +id,
      },
      data: {
        owner_name,
        tel_number,
        line_id,
        address,
        updater : {
          connect: {
            id: updaterId
          }
        }
        }
    });
    res.json({ message: "Owner Updated", result });
  } catch (error) {
    next(error);
  }
};
