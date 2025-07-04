import prisma from "../configs/prisma.config.js"


export const getAllVisit = async (req, res, next) => {
  try {
     const result = await prisma.visit.findMany()
     res.json({message: ""})
  } catch (error) {
    next (error)
  }
}

export const getVisitById = async (req, res, next) => {
  try {
    const {id} = req.params
    const result = await prisma.visit.findFirst({
      where: {
        id: +id
      }
    })
    res.json({message: `Visit ID ${id}`, result})
  } catch (error) {
    next(error)
  }
}

export const createVisit = async (req, res, next) => {
  try {
    const {id, cc, hx, pe, weight, dx, cost} = req.body
    const result = await prisma.visit.create({

    })
  } catch (error) {
    next(error)
  }
}