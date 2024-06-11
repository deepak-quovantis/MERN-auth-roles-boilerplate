const mongoose = require('mongoose');
const menuCategory = require('./menuCategory');

const menuSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: true },
  itemName: { type: String, required: true },
  itemCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  itemPrice: { type: Number, require: true },
});

module.exports = mongoose.model('Menu', menuSchema);
