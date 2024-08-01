const express = require("express");
const prodController = require("../controller/products.controller");
const router = express.Router();

router.get("/", prodController.getAllProducts);
router.get("/get-types", prodController.getTypes);
router.get("/:id", prodController.getById);
router.post("/add-product", prodController.addProduct);

module.exports = router;
