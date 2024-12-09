const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { emailLayout } = require("../../lib/emailLayout/emailLayout");

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.MAILER_EMAIL, // Your Gmail account
    pass: process.env.MAILER_PASS, // App password
  },
});

exports.sendMail = async (req, res) => {
  const { title, recepient, message, username, attachment } = req.body;

  if (!recepient) {
    return res.status(400).json({ message: "Recipient email is required." });
  }

  const layout = emailLayout(title, message, recepient, username);

  const mailOptions = {
    from: {
      name: "Bertology",
      address: "noreply@bertology",
    },
    to: recepient,
    subject: "Bertology",
    text: "BERTOLOGY",

    html: layout,
    attachments: [],
  };

  if (attachment) {
    mailOptions.attachments.push({
      filename: "attachment.png", // Change the filename based on your use case
      content: attachment.split(",")[1], // Extract the Base64 data
      encoding: "base64",
    });
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent", body: req.body });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
};
