import { authMiddleware } from "../middlewares/auth.middleware";

const visitRoute = express.Router();

// Endpoint http://localhost:6969/visits
visitRoute.get("/", authMiddleware );
visitRoute.get("/:id", authMiddleware );
visitRoute.post("/", authMiddleware );
visitRoute.patch("/:id", authMiddleware);

export default petRoute;
