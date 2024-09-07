const express = require("express");
const router = express.Router();
const authCont = require("../controller/auth.controller");

router.get("/:id", authCont.getUserById);
router.post("/register", authCont.registerUser);
router.post("/login", authCont.loginUser);

module.exports = router;
