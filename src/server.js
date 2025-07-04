import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import ownerRoute from "./routes/owner.route.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import petRoute from "./routes/pet.route.js";
import error500 from "./utils/error500.util.js";
import notfoundMiddleware from "./middlewares/notfound.middleware.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/owners", ownerRoute);
app.use("/pets", petRoute);
app.use('/visits', visitRout)

app.use(notfoundMiddleware);

app.use(error500);

const PORT = process.env.PORT || 8899;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
