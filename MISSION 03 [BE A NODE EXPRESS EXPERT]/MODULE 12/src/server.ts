import express, { Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";

const app = express();
const port = config.port;

// middleware
app.use(express.json());

// initializing database
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

app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const response = await pool.query(
      `DELETE FROM users WHERE id = $1 RETURNING id`,
      [req.params.id]
    );
    if (response.rows.length === 0) {
      return res.status(404).json({
        message: "User not found.",
      });
    }
    return res.status(200).json({
      message: "Deleted success.",
      data: response,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
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
