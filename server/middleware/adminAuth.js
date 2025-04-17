import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const adminAuth = async (req, res, next) => {
  // 1. Try to get token from headers
  let token = null;

  // Check for Authorization header
  if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    console.error("No token found in request");
    return res.status(401).json({
      success: false,
      message: "No authentication token found",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // Add user info to request
    req.user = {
      userId: decoded.id,
      role: user.role,
      isAccountVerified: user.isAccountVerified,
      iat: decoded.iat,
      exp: decoded.exp,
    };

    console.log("Authenticated user:", req.user);

    // For the /logos endpoint, allow access to both verified and unverified users
    if (req.path === "/logos") {
      return next();
    }

    // For other admin endpoints, require admin role
    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin privileges required.",
      });
    }

    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);

    // More specific error messages
    let message = "Invalid token";
    if (error.name === "TokenExpiredError") {
      message = "Token expired";
    } else if (error.name === "JsonWebTokenError") {
      message = "Malformed token";
    }

    return res.status(401).json({
      success: false,
      message,
      error: error.name,
    });
  }
};

export default adminAuth;
