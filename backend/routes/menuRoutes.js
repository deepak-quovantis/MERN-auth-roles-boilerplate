const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.route('/').get(menuController.getAllMenu);
router.route('/add').post(menuController.addMenu);

module.exports = router;
