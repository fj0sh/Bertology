const express = require("express");
const usersCont = require("../controller/users.controller");
const router = express.Router();

router.get("/", usersCont.getCustomers);
router.get("/:id", usersCont.getCustomerById);

module.exports = router;
