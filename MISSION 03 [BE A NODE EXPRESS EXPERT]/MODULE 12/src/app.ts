import express, { Request, Response } from "express";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRouter } from "./modules/user/user.routes";
import { authRouter } from "./modules/auth/auth.routes";

// config here
const app = express();

// middleware
app.use(express.json());

// initializing database
initDB();

// all routes here
app.use("/users", userRouter);
app.use("/auth", authRouter);

// home path
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello world...");
});

// not found route handle
app.use((req: Request, res: Response) => {
  res.status(400).json({
    message: "Route not found.",
    path: req.path,
  });
});

export default app;
