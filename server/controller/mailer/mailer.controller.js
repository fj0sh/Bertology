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
  const { title, recepient, message, username } = req.body;

  if (!recepient) {
    return res.status(400).json({ message: "Recipient email is required." });
  }

  const layout = emailLayout(title, message, recepient, username);

  try {
    const info = await transporter.sendMail({
      from: {
        name: "Bertology",
        address: "lemonjuzz360@gmail.com",
      },
      to: recepient,
      subject: "Bertology",
      text: "TEST",
      html: layout,
    });

    console.log("Email sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent", body: req.body });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
};
