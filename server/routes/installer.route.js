const express = require("express");
const router = express.Router();
const installerController = require("../controller/installer.controller");

router.get("/", installerController.getInstallers);
router.get("/:id", installerController.getInstallerById);
router.get("/bookings/:id", installerController.getInstallerBookings);
router.post("/", installerController.addInstaller);
router.patch("/assign", installerController.assignInstaller);
router.patch("/edit/:id", installerController.editInstaller);
router.delete("/:id", installerController.deleteInstaller);

module.exports = router;
