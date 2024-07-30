const express = require("express");
const router = express.Router();
const serviceController = require("../controller/services.controller");

router.get("/", serviceController.getAllServices);
router.get("/booked-dates", serviceController.getAllBookedDates);

module.exports = router;
