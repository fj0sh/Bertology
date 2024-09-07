const express = require("express");
const usersCont = require("../controller/users.controller");
const { verifyToken } = require("../lib/lib");
const router = express.Router();

router.get("/", usersCont.getCustomers);
router.get("/:id", usersCont.getCustomerById);

module.exports = router;
