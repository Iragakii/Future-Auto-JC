import mongoose from "mongoose";

const logoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    logoImage: {
      type: String,
      required: true,
    },
    km: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Logo = mongoose.model("Logo", logoSchema);

export default Logo;
