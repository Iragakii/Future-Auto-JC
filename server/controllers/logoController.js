import Logo from "../models/logoModel.js"; // Assuming a model for logos exists

// Create a new logo
export const createLogo = async (req, res) => {
  try {
    const { title, content } = req.body;
    const logoImage = req.files?.logoImage ? req.files.logoImage[0].path : "";

    if (!title || !content || !logoImage) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newLogo = new Logo({
      title,
      content,
      logoImage,
    });

    await newLogo.save();

    res.status(201).json({
      success: true,
      message: "Logo created successfully",
      logo: newLogo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all logos
export const getLogos = async (req, res) => {
  try {
    const logos = await Logo.find();
    res.json({ success: true, logos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a logo
export const updateLogo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const logoImage = req.files?.logoImage ? req.files.logoImage[0].path : "";

    const logo = await Logo.findById(id);
    if (!logo) {
      return res
        .status(404)
        .json({ success: false, message: "Logo not found" });
    }

    logo.title = title || logo.title;
    logo.content = content || logo.content;
    logo.logoImage = logoImage || logo.logoImage;

    await logo.save();

    res.json({ success: true, message: "Logo updated successfully", logo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a logo
export const deleteLogo = async (req, res) => {
  try {
    const { id } = req.params;
    const logo = await Logo.findById(id);
    if (!logo) {
      return res
        .status(404)
        .json({ success: false, message: "Logo not found" });
    }

    await Logo.findByIdAndDelete(id);
    res.json({ success: true, message: "Logo deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
