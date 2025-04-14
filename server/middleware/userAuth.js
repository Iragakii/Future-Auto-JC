import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  // 1. Try to get token from cookies first
  let token = null;

  // 2. Fallback to Authorization header if no cookie
  if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Debug logging (remove in production)
  console.log(
    "Auth middleware received token:",
    token?.substring(0, 10) + "..."
  );
  console.log("Request cookies:", req.cookies);
  console.log("Auth header:", req.headers.authorization);

  if (!token) {
    console.error("No token found in request");
    return res.status(401).json({
      success: false,
      message: "No authentication token found",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    // Enhanced user object
    req.user = {
      userId: tokenDecode.id,
      iat: tokenDecode.iat, // Issued at timestamp
      exp: tokenDecode.exp, // Expiration timestamp
    };

    console.log("Authenticated user:", req.user);
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

export default userAuth;
