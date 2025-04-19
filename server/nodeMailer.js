import nodemailer from "nodemailer";

// Create transporter using your SMTP credentials from .env
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Brevo SMTP server (based on your email address)
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Using SMTP_USER from .env
    pass: process.env.SMTP_PASS, // Using SMTP_PASS from .env
  },
});

export default transporter;
