const Logo = require("../models/logoModel");

// Create a new logo
const createLogo = async (req, res) => {
  try {
    const { title, content } = req.body;
    const logoImage = req.file.path; // Assuming the image is uploaded and available in req.file

    const newLogo = new Logo({
      title,
      content,
      logoImage,
    });

    await newLogo.save();
    res
      .status(201)
      .json({ message: "Logo created successfully!", logo: newLogo });
  } catch (error) {
    console.error("Error creating logo:", error);
    res
      .status(500)
      .json({ message: "Failed to create logo", error: error.message });
  }
};

module.exports = {
  createLogo,
};
