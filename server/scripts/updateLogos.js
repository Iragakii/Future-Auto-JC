import mongoose from "mongoose";
import Logo from "../models/logoModel.js";

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/yourDatabaseName", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// Update logos with placeholder values
const updateLogos = async () => {
  try {
    const logos = await Logo.find();
    for (const logo of logos) {
      logo.km = "10000"; // Placeholder value
      logo.brand = "Placeholder Brand"; // Placeholder value
      logo.location = "Placeholder Location"; // Placeholder value
      await logo.save();
    }
    console.log("Logos updated successfully");
  } catch (error) {
    console.error("Error updating logos:", error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the script
const run = async () => {
  await connectDB();
  await updateLogos();
};

run();
