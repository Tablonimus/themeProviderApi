//import { authRequired } from "../middlewares/validateToken.js";
import { Router } from "express";
import {
  searchImages,
  getImageByName,
  createImage,
  editImage,
} from "../controllers/images.controller.js";

const router = Router();

router.get("/", searchImages);
router.post("/", createImage);

router.get("/:name", getImageByName);
router.put("/", editImage);

export default router;
