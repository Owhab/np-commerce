import { Router } from "express";
import { login, signup } from "../controllers/authController";

const AuthRoutes:Router = Router();

AuthRoutes.get('/login', login);
AuthRoutes.post('/signup', signup);

export default AuthRoutes;