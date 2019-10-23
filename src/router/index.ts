import { Router } from "express";
import user from "../models/user";
import userRoutes from "./user";
import bloodTypeRoutes from "./bloodType";
import authRoutes from "./authentication";
import bloodRequestRoutes from "./bloodRequest";

let router = Router();

router.use(userRoutes);
router.use(bloodTypeRoutes);
router.use(authRoutes);
router.use(bloodRequestRoutes);


export default router;