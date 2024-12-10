const express = require("express");
const router = express.Router();
const authCont = require("../controller/auth.controller");

router.get("/:id", authCont.getUserById);
router.post("/email", authCont.getUserByEmail);
router.post("/login", authCont.loginUser);
router.post("/change-password", authCont.changePassword);
router.patch("/update/:id", authCont.updateUser);

module.exports = router;
