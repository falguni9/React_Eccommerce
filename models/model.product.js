
const mongoose = require('mongoose');

const productlistSchema = new mongoose.Schema({
  id: {
        type: String,
        required: true,
  },
  name: {
         type: String,
        required: true,
  },
  company: {
        type: String,
        required: true,
  },
  price: {
        type: Number,
        required: true,
  },
  colors: {
    type: [String],
    required: true
  },
  image: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true,
},
  category: {
    type: String,
    required: true,

  },
  featured: {
    type: Boolean,
    required: true,
  },
  createdAt:{
    type: Date,
    immutable: true,
    default: Date.now,
},
updatedAt:{
    type: Date,
    default:Date.now,
},
createdBy:{ //email of the user who created this product.
  type: String,
  required: true
},

});

module.exports = mongoose.model('Productlist', productlistSchema);