import multer from "multer";

// Set up storage for logo images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/uploads/logos"); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Middleware for handling file uploads
export const uploadLogo = multer({ storage: storage });
