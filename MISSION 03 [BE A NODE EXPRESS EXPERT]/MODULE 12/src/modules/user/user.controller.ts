import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(401).json({
      message: "Provide require field.",
      error: true,
      success: false,
    });
  }
  try {
    const result = await userService.createUser(name, email);
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
};

const getAllUSers = async (req: Request, res: Response) => {
  try {
    const response = await userService.getAllUSers();
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
};

const getSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const response = await userService.getSingleUser(id as string);
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
};

const updateUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      message: "Provide require fields.",
    });
  }
  try {
    const response = await userService.updateUser(
      name,
      email,
      req.params.id as string
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
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const response = await userService.deleteUser(req.params.id as string);
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
};

export const userControllers = {
  createUser,
  getAllUSers,
  getSingleUser,
  updateUser,
  deleteUser,
};
