import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    // Sửa thành lấy từ req.user thay vì req.body
    const userId = req.user.userId;

    const user = await userModel.findById(userId).select("-password"); // Loại bỏ password

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      userData: {
        name: user.name,
        email: user.email, // Thêm email nếu cần
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
