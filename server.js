import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute)
app.use("/users", userRoute)

app.use((err,req,res,next) => {
  res.status(err.code || 500).json({message: err.message || 'something LONG'})
})

const PORT = process.env.PORT || 8899;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
