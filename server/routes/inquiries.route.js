const express = require("express");
const router = express.Router();
const inquiriesController = require("../controller/inquiries.controller");

router.get("/", inquiriesController.getInquiries);
router.post("/", inquiriesController.addInquiry);

module.exports = router;
