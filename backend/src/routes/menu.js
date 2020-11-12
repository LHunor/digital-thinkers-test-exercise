const express = require('express');
const router = express.Router();
const menus = require('../controllers/menu.js');

// Retrieve menu by letter
router.get('/:letter', menus.findOne);

module.exports = router;