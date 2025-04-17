import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import { uploadLogo } from "../config/logoConfig.js"; // Correct import for uploadLogo
import {
  createAdmin,
  deleteUser,
  getAllUsers,
  getUser,
  updateUserRole,
} from "../controllers/adminCotroller.js"; // Keep this import for admin functions
import {
  createLogo,
  getLogos,
  updateLogo,
  deleteLogo,
} from "../controllers/logoController.js"; // Import logo functions
import { getCars } from "../controllers/carController.js"; // Import getCars function

const adminRouter = express.Router();

// Protected admin routes
adminRouter.get("/users", adminAuth, getAllUsers);
adminRouter.get("/users/:userId", adminAuth, getUser);
adminRouter.post("/create-admin", adminAuth, createAdmin);
adminRouter.put("/users/:userId/role", adminAuth, updateUserRole);
adminRouter.delete("/users/:userId", adminAuth, deleteUser);

// New route for fetching cars
adminRouter.get("/cars", adminAuth, getCars); // Add this line to fetch cars

// New routes for logo management
adminRouter.post(
  "/logos",
  adminAuth,
  uploadLogo.single("logoImage"),
  createLogo
);
adminRouter.get("/logos", adminAuth, getLogos);
adminRouter.put(
  "/logos/:id",
  adminAuth,
  uploadLogo.single("logoImage"),
  updateLogo
);
adminRouter.delete("/logos/:id", adminAuth, deleteLogo);

export default adminRouter;
