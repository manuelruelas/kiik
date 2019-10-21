import { Router } from "express";
import user from "../models/user";
import userRoutes from "./user";
import bloodTypeRoutes from "./bloodType";

let router = Router();

router.use(userRoutes);
router.use(bloodTypeRoutes);

export default router;