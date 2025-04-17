import { Router } from "express";
import { createLogo, getLogos } from "../controllers/logoController"; // Import getLogos
import multer from "multer";
const upload = multer({ dest: "uploads/logos/" }); // Set the destination for logo images
import authenticateToken from "../middleware/authMiddleware"; // Import authentication middleware

const router = Router();

// Route for creating a new logo
router.post(
  "/logos",
  authenticateToken,
  upload.single("logoImage"),
  createLogo
);

// Route for fetching all logos
router.get("/logos", authenticateToken, getLogos); // Add this line

export default router;
