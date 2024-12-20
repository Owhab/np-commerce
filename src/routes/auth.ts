import { Router } from "express";
import { login } from "../controllers/authController";

const AuthRoutes:Router = Router();

AuthRoutes.get('/login', login);

export default AuthRoutes;