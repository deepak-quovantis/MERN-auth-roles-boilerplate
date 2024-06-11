const menu = require('../models/menu');

const addMenu = async (req, res) => {
  const { itemName, itemPrice } = req.body;
  try {
    const newMenuItem = await menu.create({
      itemName,
      itemPrice,
    });

    res.status(200).json({
      message: 'Menu item added successfully',
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

const getAllMenu = async (req, res) => {
  try {
    const menuData = await menu.find();
    res.status(200).json({
      message: 'Showing all menu items',
      success: true,
      data: menuData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  addMenu,
  getAllMenu,
};
