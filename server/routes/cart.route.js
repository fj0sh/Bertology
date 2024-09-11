const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");

router.post("/:id", cartController.addToCart);
router.post("/", cartController.displayCartProducts);

module.exports = router;
