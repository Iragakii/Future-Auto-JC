import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import carRouter from "./routes/carRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;

// Connect to MongoDB with error handling
try {
  await connectDB();
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("MongoDB connection error:", error);
}

// Fixed allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://future-auto-jc.onrender.com",
  "https://autojc.netlify.app",
  "*", // or actual frontend domain
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow cookies if using them
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// Create uploads directories if they don't exist
const uploadsDir = path.join(__dirname, "uploads");
const logosDir = path.join(uploadsDir, "logos");
const carsDir = path.join(uploadsDir, "cars");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("Created uploads directory");
}

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
  console.log("Created logos upload directory");
}

if (!fs.existsSync(carsDir)) {
  fs.mkdirSync(carsDir, { recursive: true });
  console.log("Created cars upload directory");
}

// Static file serving for local files
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Determine frontend path based on environment
const isDevelopment = process.env.NODE_ENV !== "production";

// Define possible frontend paths to check
const possiblePaths = [
  path.join(__dirname, "..", "car", "public"), // Local development
  path.join(__dirname, "..", "car", "dist"), // Local production build
  path.join(__dirname, "client", "dist"), // Render structure option 1
  path.join(__dirname, "car", "dist"), // Render structure option 2
  path.join(__dirname, "dist"), // Render structure option 3
  path.join(__dirname, "build"), // Render structure option 4
];

// Find the first path that exists
let frontendPath = null;
for (const testPath of possiblePaths) {
  if (fs.existsSync(testPath)) {
    frontendPath = testPath;
    console.log(`Found frontend at: ${frontendPath}`);
    break;
  }
}

// If no path found, default to development path
if (!frontendPath) {
  frontendPath = path.join(__dirname, "..", "car", "public");
  console.warn(`Frontend path not found, defaulting to: ${frontendPath}`);
}

// Serve static files from the frontend path
app.use(express.static(frontendPath));

// API ENDPOINTS
app.get("/api", (req, res) => res.send("API Working!"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/car", carRouter);

// Catch-all route to serve frontend index.html for SPA routing, excluding /api routes
app.get(/^\/(?!api).*/, (req, res) => {
  const indexPath = path.join(frontendPath, "index.html");

  // Check if the index.html file exists
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({
      error: "Frontend not found",
      message:
        "The frontend application could not be found. Please check your deployment configuration.",
      path: indexPath,
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Server error", message: err.message });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));

export default app;
