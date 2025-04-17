import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("MongoDB connected"));
  await mongoose.connect("mongodb://localhost:27017/carDealership"); // Hardcoded connection string for testing
};

export default connectDB;
