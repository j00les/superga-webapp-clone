const express = require("express");
const router = express.Router();
const admin = require("./admin");
const pub = require("./public");

router.use("/admin", admin);
router.use("/public", pub);

module.exports = router;
