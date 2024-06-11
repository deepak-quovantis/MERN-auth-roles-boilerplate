const mongoose = require('mongoose');
const customer = require('./customer');
const orderItem = require('./orderItem');

const orderSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, require: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', require: true },
  order: [orderItem],
});

module.exports = mongoose.model('Order', orderSchema);
