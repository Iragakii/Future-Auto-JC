import Logo from "../models/logoModel.js";

// Create a new logo
export const createLogo = async (req, res) => {
  try {
    console.log("Incoming request data:", req.body, req.file); // Log incoming data
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

// Get all logos
export const getLogos = async (req, res) => {
  try {
    const logos = await Logo.find();
    const baseUrl = "http://localhost:4000/uploads/logos/"; // Base URL for logo images
    const logosWithUrls = logos.map((logo) => ({
      ...logo.toObject(),
      logoImage: `${baseUrl}${logo.logoImage.split("\\").pop()}`, // Ensure the logoImage is a valid URL
    }));
    res.status(200).json({ logos: logosWithUrls }); // Return logos with updated image URLs
  } catch (error) {
    console.error("Error fetching logos:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch logos", error: error.message });
  }
};

// Update a logo
export const updateLogo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updateData = {
      title,
      content,
    };

    // Update image only if a new one is uploaded
    if (req.file) {
      updateData.logoImage = req.file.path;
    }

    const updatedLogo = await Logo.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedLogo) {
      return res.status(404).json({ message: "Logo not found" });
    }

    res.status(200).json({
      message: "Logo updated successfully!",
      logo: updatedLogo,
    });
  } catch (error) {
    console.error("Error updating logo:", error);
    res
      .status(500)
      .json({ message: "Failed to update logo", error: error.message });
  }
};

// Delete a logo
export const deleteLogo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedLogo = await Logo.findByIdAndDelete(id);

    if (!deletedLogo) {
      return res.status(404).json({ message: "Logo not found" });
    }

    res.status(200).json({
      message: "Logo deleted successfully!",
      logo: deletedLogo,
    });
  } catch (error) {
    console.error("Error deleting logo:", error);
    res
      .status(500)
      .json({ message: "Failed to delete logo", error: error.message });
  }
};
