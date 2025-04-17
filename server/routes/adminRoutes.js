import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import { uploadLogo } from "../config/logoConfig.js";
import {
  createAdmin,
  deleteUser,
  getAllUsers,
  getUser,
  updateUserRole,
} from "../controllers/adminCotroller.js";
import {
  createLogo,
  getLogos,
  updateLogo,
  deleteLogo,
} from "../controllers/logoController.js";
import { getCars, getFilteredCars } from "../controllers/carController.js"; // Import getFilteredCars

const adminRouter = express.Router();

// Protected admin routes
adminRouter.get("/users", adminAuth, getAllUsers);
adminRouter.get("/users/:userId", adminAuth, getUser);
adminRouter.post("/create-admin", adminAuth, createAdmin);
adminRouter.put("/users/:userId/role", adminAuth, updateUserRole);
adminRouter.delete("/users/:userId", adminAuth, deleteUser);

// New route for fetching cars
adminRouter.get("/cars", adminAuth, getFilteredCars); // Updated route for filtered cars

// Logo management routes
// Create logo - only admin
adminRouter.post(
  "/logos",
  adminAuth,
  uploadLogo.single("logoImage"),
  createLogo
);

// Get logos - accessible to all authenticated users (admin middleware handles this)
adminRouter.get("/logos", adminAuth, getLogos);

// Update and delete logos - only admin
adminRouter.put(
  "/logos/:id",
  adminAuth,
  uploadLogo.single("logoImage"),
  updateLogo
);

adminRouter.delete("/logos/:id", adminAuth, deleteLogo);

export default adminRouter;
