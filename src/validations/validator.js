import { object, ref, string } from "yup";
import createErrorUtil from "../utils/createError.util.js";

export const registerSchema = object({
  username: string()
    .required("Please Enter Your Username"),
  password: string().min(6, "Password must be at least 6 letters"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password is not MATCHED"
  ),
});

export const loginSchema = object({
  username: string()
    .required("Please Enter Your Username"),
  password: string().min(6, "Email or Password is not Correct"),
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next()
  } catch (error) {
    const errMsg = error.errors.join("|||")
    console.log(errMsg)
    createErrorUtil(400, errMsg)
  }
};