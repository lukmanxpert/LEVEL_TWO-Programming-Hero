import express, { Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRouter } from "./modules/user/user.routes";

const app = express();
const port = config.port;

// middleware
app.use(express.json());

// initializing database
initDB();

// all routes here
app.use("/users", userRouter);

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
