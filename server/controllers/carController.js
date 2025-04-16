import Car from "../models/carModels.js";

// Get all cars
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json({ success: true, cars });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete entire car
export const deleteCar = async (req, res) => {
  try {
    const { carId } = req.params;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    await Car.findByIdAndDelete(carId);
    res.json({ success: true, message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete center image
export const deleteCenterImage = async (req, res) => {
  try {
    const { carId } = req.params;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    car.centerImage = "";
    await car.save();
    res.json({ success: true, message: "Center image deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete left image
export const deleteLeftImage = async (req, res) => {
  try {
    const { carId } = req.params;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    car.leftImage = "";
    await car.save();
    res.json({ success: true, message: "Left image deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete content (other fields except images)
export const deleteContent = async (req, res) => {
  try {
    const { carId } = req.params;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    car.title = "";
    car.year = "";
    car.mileage = "";
    car.status = "";
    car.sold = false;
    await car.save();
    res.json({ success: true, message: "Content deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create new car
import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "uploads/cars";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

export const upload = multer({ storage: storage }).fields([
  { name: "centerImage", maxCount: 1 },
  { name: "leftImage", maxCount: 1 },
]);

export const createCar = async (req, res) => {
  try {
    const { title, year, mileage, status, sold } = req.body;
    const centerImage = req.files?.centerImage
      ? req.files.centerImage[0].path
      : "";
    const leftImage = req.files?.leftImage ? req.files.leftImage[0].path : "";

    if (!title || !year || !mileage || !status) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newCar = new Car({
      title,
      year,
      mileage,
      status,
      sold: sold === "true" || sold === true,
      centerImage,
      leftImage,
    });

    await newCar.save();

    res.status(201).json({
      success: true,
      message: "Car created successfully",
      car: newCar,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
