const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");
const authenticateUser = require("../middlewares/authenticateUser/authenticateUser");

router.use(authenticateUser);

router.post("/", bookingController.bookService);
router.post("/selectTypes", bookingController.selectServiceType);
router.post("/status", bookingController.getBookedServiceByStatus);
router.post("/date", bookingController.getBookingsByDate);
router.get("/bookings", bookingController.getBookedServices);
router.get("/bookings/:id", bookingController.getSelectedTypes);
router.get("/status", bookingController.getStatusCount);
router.get("/getMonthlySales", bookingController.getMonthlySales);
router.patch("/accept/:id", bookingController.acceptBooking);
router.patch("/decline/:id", bookingController.declineBooking);
router.patch("/done/:id", bookingController.setBookingAsDone);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
