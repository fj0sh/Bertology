const express = require("express");
const prodController = require("../controller/products.controller");
const router = express.Router();

router.get("/", prodController.getAllProducts);

module.exports = router;
