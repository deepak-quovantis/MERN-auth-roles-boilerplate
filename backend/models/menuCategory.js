const mongoose = require('mongoose');

const menuCategorySchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, require: true },
  categoryName: { type: String, require: true },
});

module.exports = mongoose.model('Category', menuCategorySchema);
