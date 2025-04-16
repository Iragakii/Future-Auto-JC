import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: String, required: true },
    mileage: { type: String, required: true },
    status: { type: String, required: true },
    sold: { type: Boolean, required: true },
    centerImage: { type: String, required: true },
    leftImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Car", CarSchema);
