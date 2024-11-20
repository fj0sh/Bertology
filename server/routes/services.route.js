const express = require("express");
const router = express.Router();
const serviceController = require("../controller/services.controller");
const { verifyToken } = require("../lib/lib");

router.get("/", serviceController.getAllServices);
router.get("/booked-dates", serviceController.getFullyBookedDates);
router.get("/:id", serviceController.getServiceById);
router.post("/date-info", serviceController.getDateInfo);
router.post("/", serviceController.addService);

module.exports = router;
