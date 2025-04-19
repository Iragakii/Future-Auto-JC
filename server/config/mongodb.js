import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("MongoDB connected"));
  const mongoUri =
    process.env.MONGODB_URI || "mongodb://localhost:27017/carDealership";
  await mongoose.connect(mongoUri);
};

export default connectDB;
