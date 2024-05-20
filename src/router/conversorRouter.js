const express = require("express");
const router = express.Router();
const conversorController = require("../controller/conversorController.js");

// router.get("/conversor", conversorController.getAllConversor);
router.post("/", conversorController.createConversor);

module.exports = router;
