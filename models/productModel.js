const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  //fields
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
    maxlength: 300,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
//exporting
const Product = mongoose.model("product", productSchema);
module.exports = Product;