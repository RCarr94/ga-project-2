const express = require('express');

const router = express.Router();
const trailsCtrl = require('../controllers/trails');
const isLoggedIn = require('../config/auth');

router.get('/', trailsCtrl.index);

module.exports = router;
