const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");

router.post("/:id", cartController.addToCart);
router.get("/", cartController.displayCartProducts);

module.exports = router;
