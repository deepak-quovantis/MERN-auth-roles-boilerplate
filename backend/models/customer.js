const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, require: true },
  customerName: { type: String, require: true },
  phoneNumber: { type: Number, require: true },
  emailId: { type: String },
});

module.exports = mongoose.model('Customer', customerSchema);
