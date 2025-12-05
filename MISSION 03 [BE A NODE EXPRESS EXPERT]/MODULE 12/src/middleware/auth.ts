import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(404).json({
        message: "You're not allowed.",
        error: true,
        success: false,
      });
    }
    const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;
    req.user = decoded;
    if (roles.length && !roles.includes(decoded.role)) {
      res.status(404).json({
        message: "You're not allowed to access.",
        success: false,
        error: true,
      });
    }
    next();
  };
};

export default auth;
