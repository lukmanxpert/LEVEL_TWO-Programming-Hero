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

export const userControllers = {
  createUser,
};
