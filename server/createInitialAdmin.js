import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import userModel from "./models/userModel.js";

dotenv.config();

// Function to create initial admin user
const createInitialAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await userModel.findOne({ role: "admin" });

    if (existingAdmin) {
      console.log("Admin user already exists:", existingAdmin.email);
      return;
    }

    // Create admin details - REPLACE WITH YOUR OWN VALUES
    const adminDetails = {
      name: "Admin",
      email: "ngocvan.hd29@gmail.com",
      password: "Samaki123699",
      role: "admin",
      isAccountVerified: true,
    };

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminDetails.password, 10);

    // Create the admin user
    const newAdmin = new userModel({
      ...adminDetails,
      password: hashedPassword,
    });

    // Save to database
    await newAdmin.save();

    console.log("Admin user created successfully:", newAdmin.email);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
};

// Run the function
createInitialAdmin().catch(console.error);
