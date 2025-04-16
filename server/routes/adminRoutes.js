import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  createAdmin,
  deleteUser,
  getAllUsers,
  getUser,
  updateUserRole,
} from "../controllers/adminCotroller.js";

const adminRouter = express.Router();

// Protected admin routes
adminRouter.get("/users", adminAuth, getAllUsers);
adminRouter.get("/users/:userId", adminAuth, getUser);
adminRouter.post("/create-admin", adminAuth, createAdmin);
adminRouter.put("/users/:userId/role", adminAuth, updateUserRole);
adminRouter.delete("/users/:userId", adminAuth, deleteUser);

export default adminRouter;
