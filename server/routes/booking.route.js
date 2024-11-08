const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");

router.post("/", bookingController.bookService);
router.post("/selectTypes", bookingController.selectServiceType);
router.post("/status", bookingController.getBookedServiceByStatus);
router.get("/bookings", bookingController.getBookedServices);
router.get("/bookings/:id", bookingController.getSelectedTypes);
router.get("/status", bookingController.getStatusCount);
router.get("/getMonthlySales", bookingController.getMonthlySales);
router.patch("/accept/:id", bookingController.acceptBooking);
router.patch("/decline/:id", bookingController.declineBooking);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
