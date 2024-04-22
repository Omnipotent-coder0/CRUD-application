import { Router } from "express";
import authRoutes from "./auth.routes.mjs";
import entryRoutes from "./entry.routes.mjs";

const router = Router();

router.use("/auth",authRoutes);
router.use("/entry",entryRoutes);

export default router;
