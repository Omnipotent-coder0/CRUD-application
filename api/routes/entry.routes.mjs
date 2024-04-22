import { Router } from "express";
import {
  createEntry,
  deleteEntry,
  getEntries,
  getPublicEntries,
  updateEntry,
} from "../controllers/entry.controllers.mjs";
import { checkSchema } from "express-validator";
import { entryValidationSchema } from "../utils/validationSchemas.mjs";

const router = Router();

router.get("/public", getPublicEntries);
router.get("/", getEntries);
router.post("/", checkSchema(entryValidationSchema), createEntry);
router.put("/:id", checkSchema(entryValidationSchema), updateEntry);
router.delete("/:id", deleteEntry);

export default router;
