const express = require("express");
const router = express.Router();
const authCont = require("../controller/auth.controller");

router.get("/", authCont.getAllUsers);
router.post("/register", authCont.registerUser);
router.post("/login", authCont.loginUser);

module.exports = router;
