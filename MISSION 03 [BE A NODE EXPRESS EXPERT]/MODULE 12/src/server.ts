import express, { Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";

const app = express();
const port = 5000;

// middleware
app.use(express.json());
dotenv.config();

// db
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING_PG,
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
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS todos(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT false,
    due_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `);
};

initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world...");
});

app.post("/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(401).json({
      message: "Provide require field.",
      error: true,
      success: false,
    });
  }
  try {
    const result = await pool.query(
      `
      INSERT INTO users(name, email) VALUES($1, $2) RETURNING*
      `,
      [name, email]
    );
    if (result.rows[0]) {
      return res.status(200).json({
        message: "Data inserted success.",
        error: false,
        success: true,
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message || "Data inserted failed.",
      error: true,
      success: false,
    });
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const response = await pool.query(`SELECT * FROM users`);
    res.status(200).json({
      message: "Data retrieve successful.",
      error: false,
      success: true,
      data: response.rows,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get users.",
      error: true,
      success: false,
      errorData: error,
    });
  }
});

app.get("/users/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const response = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      id,
    ]);
    if (!response.rows[0]) {
      return res.status(200).json({
        message: "No user found.",
        error: false,
        success: true,
      });
    }
    return res.status(200).json({
      message: "User data fetched success.",
      error: false,
      success: true,
      data: response.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
});

app.put("/users/:id", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      message: "Provide require fields.",
    });
  }
  try {
    const response = await pool.query(
      `UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email`,
      [name, email, req.params.id]
    );
    if (response.rows.length === 0) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
        error: true,
      });
    }
    return res.status(200).json({
      message: "User updated.",
      data: response,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
