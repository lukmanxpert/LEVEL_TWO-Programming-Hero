import { Router } from "express";
import { authControllers } from "./auth.controller";

const route = Router();
// all routes here

route.get("/login", authControllers.loginUser);

export const authRouter = route;
