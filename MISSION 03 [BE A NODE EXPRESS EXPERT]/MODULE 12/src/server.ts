import express, { Request, Response } from "express";
import { Pool } from "pg";

const app = express();
const port = 5000;

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_laYCSfw75NJU@ep-aged-hat-adjigyie-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

// middleware
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world...");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(201).json({
    message: "Api is working fine",
    data: req.body,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
