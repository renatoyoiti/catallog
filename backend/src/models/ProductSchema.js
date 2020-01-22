const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  color: {
    type: String,
  },
  details: {
    type: String,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
