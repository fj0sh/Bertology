const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { emailLayout } = require("../../lib/emailLayout/emailLayout");

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: "lemonjuzz360@gmail.com", // Your Gmail account
    pass: process.env.MAILER_PASS, // App password
  },
});

exports.sendMail = async (req, res) => {
  const { recepient, message, username } = req.body;

  if (!recepient) {
    return res.status(400).json({ message: "Recipient email is required." });
  }

  const layout = emailLayout(message, recepient, username);

  try {
    const info = await transporter.sendMail({
      from: {
        name: "Bertology",
        address: "lemonjuzz360@gmail.com",
      },
      to: recepient,
      subject: "Bertology OTP",
      text: " OTP",
      html: layout,
    });

    console.log("Email sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent", OTP });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
};
