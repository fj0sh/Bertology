const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");

router.post("/", bookingController.bookService);
router.get("/bookings", bookingController.getBookedServices);
router.get("/bookings/:id", bookingController.getBookedServiceId);

module.exports = router;
