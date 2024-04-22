import { Router } from "express";
import { login, logout, signup, status } from "../controllers/auth.controllers.mjs";
import { checkSchema } from "express-validator";
import { userValidationSchema } from "../utils/validationSchemas.mjs";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/signup",checkSchema(userValidationSchema), signup);
router.get("/status", status);

export default router;
