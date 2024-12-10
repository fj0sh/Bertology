const express = require("express");
const router = express.Router();
const paymentRoute = require("../controller/payments.controller");

router.get("/", paymentRoute.getPayment);
router.post("/", paymentRoute.addPayment);
router.patch("/:id", paymentRoute.editPayment);
router.delete("/:id", paymentRoute.deletePayment);

module.exports = router;
