import { pool } from "../../config/db";

const createUser = async (name: string, email: string) => {
  const result = await pool.query(
    `INSERT INTO users(name, email) VALUES($1, $2) RETURNING*`,
    [name, email]
  );
  return result;
};

const getAllUSers = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};

const getSingleUser = async (id: string) => {
  const response = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return response;
};

const updateUser = async (name: string, email: string, id: string) => {
  const response = await pool.query(
    `UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email`,
    [name, email, id]
  );
  return response;
};

const deleteUser = async (id: string) => {
  const response = await pool.query(
    `DELETE FROM users WHERE id = $1 RETURNING id`,
    [id]
  );
  return response;
};

export const userService = {
  createUser,
  getAllUSers,
  getSingleUser,
  updateUser,
  deleteUser,
};
