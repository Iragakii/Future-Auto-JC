import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import carRouter from "./routes/carRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

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
  "http://localhost:5174", // hoặc domain thực tế của frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    // Cho phép không có origin (postman, curl, etc)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(cookieParser()); // Add cookie parser
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// API ENDPOINTS
app.get("/", (req, res) => res.send("API Working!"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter); // Add admin routes
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use("/api/car", carRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Server error", message: err.message });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));

export default app;
