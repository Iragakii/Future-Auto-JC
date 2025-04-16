import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import transporter from "../config/nodeMailer.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome to JC Group Website",
      text: `Your email id is : ${email}`,
    };
    await transporter.sendMail(mailOptions);

    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// In your authController.js
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Return different responses based on role
    if (user.role === "admin") {
      return res.status(200).json({
        success: true,
        message: "Admin login successful",
        token,
        redirectTo: "/admin", // Add this flag
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
export const logout = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(403).json({
        success: false,
        message: "Authorization token is required",
      });
    }

    // Lấy token từ header
    const token = authHeader.split(" ")[1];

    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({ success: true, message: "Logout successfully" });
  } catch (error) {
    return res.json({ success: false, message: "token is not defined" });
  }
};
//  send OTP to user email
export const sendVerifyOtp = async (req, res) => {
  console.log("✅ sendVerifyOtp called, req.user:", req.user);
  try {
    // Lấy Bearer Token từ header Authorization
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(403).json({
        success: false,
        message: "Authorization token is required",
      });
    }

    // Lấy token từ header
    const token = authHeader.split(" ")[1];

    // Giải mã và xác thực Bearer Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.id;
    console.log("revice haha :", userId); // Lấy userId từ decoded token

    // Tìm người dùng trong database
    const user = await userModel.findById(userId);

    console.log("📄 Found user:", user);

    if (!user) {
      console.log("❌ User not found in DB!");
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Kiểm tra xem tài khoản đã xác thực hay chưa
    if (user.isAccountVerified) {
      return res.json({
        success: false,
        message: "Your account is already verified",
      });
    }
    // renew OTP
    const otp = String(Math.floor(10000 + Math.random() * 900000));

    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000; // 1 day
    await user.save();
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Account Verification OTP",
      text: ` Your OTP is : ${otp}`,
    };
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "OTP sent to your email" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      success: false,
      message: "Authorization token is required",
    });
  }

  // Lấy token từ header
  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const userId = decoded.id;

  const { otp } = req.body;

  if (!userId || !otp) {
    console.log("[Verify Email] Missing details - userId or otp not provided");
    return res.status(400).json({
      success: false,
      message: "Missing Details",
    });
  }

  try {
    console.log(`[Verify Email] Looking up user with ID: ${userId}`);
    const user = await userModel.findById(userId);

    if (!user) {
      console.log("[Verify Email] User not found in database");
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("[Verify Email] User found:", {
      id: user._id,
      email: user.email,
      isVerified: user.isAccountVerified,
      storedOtp: user.verifyOtp ? "******" : "empty",
      otpExpiry: new Date(user.verifyOtpExpireAt).toISOString(),
    });

    if (user.isAccountVerified) {
      console.log("[Verify Email] User already verified");
      return res.json({
        success: true,
        message: "Account already verified",
      });
    }

    if (user.verifyOtp === "" || user.verifyOtp !== otp) {
      console.log("[Verify Email] OTP mismatch", {
        inputOtp: otp,
        storedOtp: user.verifyOtp ? "******" : "empty",
      });
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (user.verifyOtpExpireAt < Date.now()) {
      console.log("[Verify Email] OTP expired", {
        currentTime: new Date().toISOString(),
        expiryTime: new Date(user.verifyOtpExpireAt).toISOString(),
      });
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    console.log("[Verify Email] OTP verification successful. Updating user...");
    user.isAccountVerified = true;
    user.verifyOtp = "";
    user.verifyOtpExpireAt = null;

    // FIX: Add await here
    await user.save();

    // FIX: Verify the update by fetching fresh data
    const updatedUser = await userModel.findById(userId);
    console.log("[Verify Email] Post-save verification:", {
      isVerified: updatedUser.isAccountVerified,
    });

    return res.json({
      success: true,
      message: "Account verified successfully",
      user: {
        id: updatedUser._id,
        email: updatedUser.email,
        isVerified: updatedUser.isAccountVerified,
      },
    });
  } catch (error) {
    console.error("[Verify Email] Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
export const isAuthenticated = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Send Password    Reset OTP
export const sendResetOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({ success: false, message: "Email is required" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const otp = String(Math.floor(10000 + Math.random() * 900000));

    user.resetOtp = otp;
    user.resetOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000; // 1 day
    await user.save();
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Password Reset OTP",
      text: ` Your OTP is : ${otp}`,
    };
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "OTP sent to your email" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res.json({ success: false, message: "All fields are required" });
  }
  try {
    const user = await userModel.findById({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (user.resetOtp === "" || user.resetOtp !== otp) {
      return res.json({ success: false, message: "Invalid OTP" });
    }
    if (user.resetOtpExpireAt < Date.now()) {
      return res.json({ success: false, message: "OTP expired" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetOtp = "";

    user.resetOtpExpireAt = 0;
    await user.save();
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Password Reset Successfully",
      text: ` Your password has been reset successfully`,
    };
    return res.json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
export const resendOtp = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming userAuth middleware attaches the user

    // Find the user
    const user = await userModel.findOne(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Check if already verified
    if (user.isAccountVerified) {
      return res.json({ success: true, message: "Account already verified" });
    }

    // Generate new OTP
    const newOtp = generateOTP(6); // Your OTP generation function
    const otpExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes expiry

    // Update user record
    user.verifyOtp = newOtp;
    user.verifyOtpExpireAt = otpExpiry;
    await user.save();

    // Send OTP to user's email (implementation depends on your email service)
    // await sendVerificationEmail(user.email, newOtp);

    return res.json({
      success: true,
      message: "New OTP sent successfully",
      otp: newOtp, // Remove this in production - only for development/testing
    });
  } catch (error) {
    console.error("Resend OTP error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
