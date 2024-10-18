const express = require("express");
const { sendMail } = require("../controller/mailer.controller");

const router = express.Router();

router.post("/sendMail", sendMail);

module.exports = router;
