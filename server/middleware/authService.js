import axios from "axios";

const backendUrl = "http://localhost:4000"; // URL backend của bạn

export const sendVerifyOtp = async (token) => {
  try {
    const { data } = await axios.post(
      `${backendUrl}/api/auth/send-verify-otp`,
      {}, // Tham số gửi trong body nếu cần
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data; // Trả về dữ liệu nhận được từ server
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error; // Throw error để xử lý ở component nếu cần
  }
};
