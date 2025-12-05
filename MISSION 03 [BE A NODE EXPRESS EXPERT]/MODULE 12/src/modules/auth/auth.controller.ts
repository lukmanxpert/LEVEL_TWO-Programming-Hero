import { Request, Response } from "express";
import { authService } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log({ email, password });
  if (!email || !password) {
    return res.status(400).json({
      message: "Provide required field.",
      error: true,
      success: false,
    });
  }
  try {
    const result = await authService.loginUser(email, password);
    if (!result) {
      res.status(400).json({
        message: "Invalid credential.",
        success: false,
        error: true,
      });
    }
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

export const authControllers = {
  loginUser,
};
