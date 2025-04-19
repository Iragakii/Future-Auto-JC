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

// Fixed allowed origins - remove space and add both server and frontend ports
const allowedOrigins = [
  "http://localhost:5173",
  "https://future-auto-jc.onrender.com",
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
app.use(cookieParser()); // Add cookie parser
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// Create uploads directories if they don't exist
import fs from "fs";
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

// Static file serving
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API ENDPOINTS
app.get("/", (req, res) => res.send("API Working!"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter); // Admin routes
app.use("/api/car", carRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Server error", message: err.message });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));

export default app;
