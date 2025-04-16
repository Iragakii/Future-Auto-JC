import express from "express";
import {
  getCars,
  deleteCar,
  deleteCenterImage,
  deleteLeftImage,
  deleteContent,
} from "../controllers/carController.js";

const router = express.Router();

// Get all cars
router.get("/", getCars);

// Delete entire car
router.delete("/:carId", deleteCar);

// Delete center image
router.delete("/:carId/centerImage", deleteCenterImage);

// Delete left image
router.delete("/:carId/leftImage", deleteLeftImage);

// Delete content
router.delete("/:carId/content", deleteContent);

// Create new car
import { upload, createCar } from "../controllers/carController.js";

router.post("/", upload, createCar);

export default router;
