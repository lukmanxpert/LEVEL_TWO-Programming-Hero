import express, { Request, Response } from "express";
import { Pool } from "pg";

const app = express();
const port = 5000;

// middleware
app.use(express.json());

// db
const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_laYCSfw75NJU@ep-aged-hat-adjigyie-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    )
    `);
};

initDB();

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
