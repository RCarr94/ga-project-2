const express = require('express');

const router = express.Router();
const trailsCtrl = require('../controllers/trails');
const isLoggedIn = require('../config/auth');

router.get('/', trailsCtrl.index);
router.get('/new', isLoggedIn, trailsCtrl.new);
router.post('/', isLoggedIn, trailsCtrl.create);
router.get('/:id', trailsCtrl.show);

module.exports = router;
