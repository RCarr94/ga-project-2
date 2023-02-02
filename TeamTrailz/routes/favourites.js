const express = require('express');

const router = express.Router();
const favouritesCtrl = require('../controllers/favourites');
const isLoggedIn = require('../config/auth');

router.get('/favourites/new', favouritesCtrl.new);
router.post('/favourites', isLoggedIn, favouritesCtrl.create);

module.exports = router;