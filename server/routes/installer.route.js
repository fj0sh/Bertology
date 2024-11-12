const express = require("express");
const router = express.Router();
const installerController = require("../controller/installer.controller");

router.get("/", installerController.getInstallers);
router.get("/:id", installerController.getInstallerById);
router.post("/", installerController.addInstaller);
router.patch("/assign", installerController.assignInstaller);

module.exports = router;
