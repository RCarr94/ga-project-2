const express = require('express');

const router = express.Router();

const favouritesCtrl = require('../controllers/favourites');
const isLoggedIn = require('../config/auth');


router.get('/new', isLoggedIn, favouritesCtrl.new);
router.post('/', isLoggedIn, trailsCtrl.create);

module.exports = router;