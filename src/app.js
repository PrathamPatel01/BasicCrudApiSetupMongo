import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import cors from "cors";
import userRoutes from "./demo/demoRoutes.js"
const app = express();
app.use(express.json());
app.use(cors());
const basePath = "yourBasePath";
app.use(userRoutes)
app.get(`/test`, (req, res, next) => {
  res.json({ message: "Hello World" });
});

// global error handle
app.use(globalErrorHandler);

export default app;
