const express = require('express');
const router = express.Router();
const menuCategoryController = require('../controllers/menuCategoryController');

router.route('/').get(menuCategoryController.getCategories);
router.route('/add').post(menuCategoryController.addCategory);
router.route('/:id').get(menuCategoryController.getCategory).delete(menuCategoryController.deleteCategory).put(menuCategoryController.updateCategory);

module.exports = router;
