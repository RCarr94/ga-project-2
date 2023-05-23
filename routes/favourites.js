const express = require('express');

const router = express.Router();

const favouritesCtrl = require('../controllers/favourites');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, favouritesCtrl.index);
router.get('/new', isLoggedIn, favouritesCtrl.new);
router.post('/', isLoggedIn, favouritesCtrl.create);
router.delete('/:id', favouritesCtrl.delete);

module.exports = router;