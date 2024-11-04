const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");

router.post("/", bookingController.bookService);
router.post("/selectTypes", bookingController.selectServiceType);
router.get("/bookings", bookingController.getBookedServices);
router.get("/bookings/:id", bookingController.getSelectedTypes);
router.patch("/accept/:id", bookingController.acceptBooking);
router.patch("/decline/:id", bookingController.declineBooking);

module.exports = router;
