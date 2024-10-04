const express = require("express");
const router = express.Router();
const serviceController = require("../controller/services.controller");
const { verifyToken } = require("../lib/lib");

router.get("/", serviceController.getAllServices);
router.get("/booked-dates", serviceController.getAllBookedDates);
router.get("/:id", serviceController.getServiceById);

module.exports = router;
