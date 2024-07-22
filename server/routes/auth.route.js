const express = require("express");
const router = express.Router();
const authCont = require("../controller/auth.controller");

router.get("/", authCont.getAllUsers);
router.post("/register", authCont.registerUser);

module.exports = router;
