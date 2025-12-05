import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(404).json({
        message: "You're not allowed.",
        error: true,
        success: false,
      });
    }
    const decoded = jwt.verify(token, config.jwtSecret as string);
    console.log({ decoded });
    next();
  };
};

export default auth;
