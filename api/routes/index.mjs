import { Router } from "express";
import authRoutes from "./auth.routes.mjs";
import entryRoutes from "./entry.routes.mjs";

const router = Router();

router.use(authRoutes);
router.use(entryRoutes);

router.get("/", (req, res) => {
  return res.send({ hiiii: "hiiiiiii" });
});

export default router;
