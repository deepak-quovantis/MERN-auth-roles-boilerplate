const mongoose = require('mongoose');
const order = require('./menu');

const OrderItemSchema = new mongoose.Mongoose.Schema({
  menuItem: [{ type: mongoose.Schema.Types.ObjectId, ref: 'menu', require: true }],
  qty: { type: Number, require: true },
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);
