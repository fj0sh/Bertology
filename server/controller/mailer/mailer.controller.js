const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

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
  const { recepient, OTP } = req.body;

  if (!recepient) {
    return res.status(400).json({ message: "Recipient email is required." });
  }

  try {
    const info = await transporter.sendMail({
      from: {
        name: "NodeMailer",
        address: "lemonjuzz360@gmail.com",
      },
      to: recepient,
      subject: "Test Email for Capstone OTP",
      text: "OTP",
      html: `<div><p>Your OTP is ${OTP}</p> <a href="https://youtu.be/2nuDZtSYPOA?si=_EzplpZfwUCYLmEM">Click me to enter OTP</a></div>`,
    });

    console.log("Email sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent", otp });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
};
