import Logo from "../models/logoModel.js";

// Create a new logo
export const createLogo = async (req, res) => {
  try {
    console.log("Incoming request data:", req.body, req.file); // Log incoming data
    const { title, content, km, brand, location } = req.body;

    if (!title || !content || !km || !brand || !location) {
      return res.status(400).json({
        message:
          "All fields are required (title, content, km, brand, location)",
      });
    }

    const logoImage = req.file ? req.file.path : "";

    if (!logoImage) {
      return res.status(400).json({ message: "Logo image is required" });
    }

    const newLogo = new Logo({
      title,
      content,
      logoImage,
      km,
      brand,
      location,
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

    // Format the image URLs properly - use absolute path from server root
    const formattedLogos = logos.map((logo) => {
      const logoObj = logo.toObject();

      // Fix the path format for Windows and Unix compatibility
      if (logoObj.logoImage) {
        // Handle the path to ensure it starts with /uploads
        const imagePath = logoObj.logoImage.replace(/\\/g, "/");
        const relativePath = imagePath.includes("/uploads")
          ? imagePath.substring(imagePath.indexOf("/uploads"))
          : `/uploads/logos/${imagePath.split("/").pop()}`;

        logoObj.logoImage = relativePath;
      }

      return logoObj;
    });

    res.status(200).json({
      success: true,
      count: formattedLogos.length,
      logos: formattedLogos,
    });
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
    const { title, content, km, brand, location } = req.body;

    const updateData = {
      title,
      content,
      km,
      brand,
      location,
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
