import express from "express";
import { getCarData } from "../controllers/carController.js";

const router = express.Router();

// Using router.get("/car") as requested
router.get("/", getCarData);

export default router;
