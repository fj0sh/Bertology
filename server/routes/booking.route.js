const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");
const authenticateUser = require("../middlewares/authenticateUser/authenticateUser");

router.post("/date", bookingController.getBookingsByDate);
router.post("/", bookingController.bookService);
router.post("/selectTypes", bookingController.selectServiceType);
router.post("/declineReason", bookingController.declineBookingReason);
router.post("/status", bookingController.getBookedServiceByStatus);
// router.use(authenticateUser);

router.get("/bookings", bookingController.getBookedServices);
router.get("/bookings/:id", bookingController.getSelectedTypes);
router.get("/status", bookingController.getStatusCount);
router.get("/getMonthlySales", bookingController.getMonthlySales);
router.get("/declined/:id", bookingController.getDeclineReasonById);

router.patch("/accept/:id", bookingController.acceptBooking);
router.patch("/decline/:id", bookingController.declineBooking);
router.patch("/done/:id", bookingController.setBookingAsDone);
router.patch("/reassign", bookingController.reassignInstaller);

router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
