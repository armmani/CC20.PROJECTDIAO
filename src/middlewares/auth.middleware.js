import jwt from "jsonwebtoken";
import createErrorUtil from "../utils/createError.util.js";

export const authMiddleware = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      createErrorUtil(401, "Token Unauthorized");
    }
    const token = header.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        createErrorUtil(401, "Token is Invalid");
      }

      req.user = decode;
      next();
    });
  } catch (error) {
    next(error);
  }
};
