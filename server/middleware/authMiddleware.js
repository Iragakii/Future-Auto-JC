const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); // Import the User model

// Middleware to check for a valid token
const authenticateToken = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header
  if (!token) return res.sendStatus(401); // Unauthorized if no token

  jwt.verify(token, "secret#text", async (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden if token is invalid

    // Check if user exists in the database
    const foundUser = await User.findById(user.id);
    if (!foundUser) return res.status(404).json({ message: "User not found" });

    req.user = foundUser; // Attach user info to request
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;
