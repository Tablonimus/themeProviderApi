import { Router } from "express";
import {
  searchColors,
  getColorByName,
  createColor,
  editColor,
} from "../controllers/colors.controller.js";

const router = Router();

router.get("/", searchColors);
router.post("/", createColor);

router.get("/:name", getColorByName);
router.put("/", editColor);

export default router;
