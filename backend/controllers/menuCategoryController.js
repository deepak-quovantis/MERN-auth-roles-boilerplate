const menuCategory = require('../models/menuCategory');

//@desc   Add Category
//@route  POST /menucategory/add
const addCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const newCategory = await menuCategory.create({
      categoryName,
    });

    res.status(200).json({
      success: true,
      message: 'New menu category created successfully',
      data: newCategory,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error adding new category. ${error}`,
    });
  }
};

//@desc   Get All Category
//@route  GET /menucategory
const getCategories = async (req, res) => {
  try {
    const categories = await menuCategory.find();

    res.status(200).json({
      success: true,
      message: 'Showing All Categories',
      data: categories,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error fetching categories. ${error}`,
    });
  }
};

//@desc   Get Category by id
//@route  GET /menucategory/:id
const getCategory = async (req, res) => {
  try {
    const menuCat = await menuCategory.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: `Showing menucategory with id ${req.params.id}`,
      data: menuCat,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error Fetching menu category. ${error}`,
    });
  }
};

//@desc   Delete Category
//@route  DEL /menucategory/:id
const deleteCategory = async (req, res) => {
  try {
    const category = await menuCategory.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: `Successfully deleted category with id ${req.params.id}`,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error Deleting category. ${error}`,
    });
  }
};

//@desc   Update Category
//@route  PUT /menucategory/:id
const updateCategory = async (req, res) => {
  try {
    const category = await menuCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    category.save();

    res.status(200).json({
      success: true,
      message: `category Updated Successfully`,
      data: category,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Could not update category. ${error}`,
    });
  }
};

module.exports = {
  addCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
};
