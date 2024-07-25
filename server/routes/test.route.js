const express = require("express");
const router = express.Router();
const testCont = require("../controller/test.controller");

router.get("/", testCont.getAllTest);
router.get("/:id", testCont.getById);
router.post("/add", testCont.addTest);
router.patch("/edit/:id", testCont.updateTest);
router.delete("/delete/:id", testCont.deleteTest);

module.exports = router;
