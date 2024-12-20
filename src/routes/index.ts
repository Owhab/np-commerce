import { Router } from "express";
import AuthRoutes from "./auth";

export const RootRouter:Router = Router();

RootRouter.use('/auth', AuthRoutes);

export default RootRouter;