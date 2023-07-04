
const mongoose = require('mongoose');

const productlistSchema = new mongoose.Schema({
  // id: {
  //       type: String,
  //       required: true,
  // },
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
    type:Array,
    required: true
  },
  image: {
    type: Array,
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
    default: false,
  },
  createdAt:{
    type: Date,
    immutable: true,
    default: Date.now,
},shipping:{
  type: Boolean,
  // required: true,
  // default: false,
},

stock:{
  type:Number,
  required:true
},
reviews:{
  type:Number,
  required:true
},
stars:{
  type:Number,
  required:true
},
updatedAt:{
    type: Date,
    default:Date.now,
},
ProductStatus:{
  type: String,
  required: true,
  default: "approved",
  enum: ["approved", "pending", "suspended"]
 },
createdBy:{ //email of the user who created this product.
  type: String,
  required: true
},

});

module.exports = mongoose.model('Productlist', productlistSchema);