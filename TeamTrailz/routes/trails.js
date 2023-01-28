const express = require("express");

const router = express.Router();
const trailsCtrl = require("../controllers/trails");

router.get("/", trailsCtrl.index);

module.exports = router;
