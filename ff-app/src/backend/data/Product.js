const mongoose = require('mongoose');

const ProductData = new mongoose.Schema({
  id: {
    type: Int,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Float,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  likes: {
    type: Int,
    default: 0
  }
});

module.exports = mongoose.model('Product', ProductData);
