const { required } = require("khalti-checkout-web");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const StockOutSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "stockin",
  },

  productImage: {
    type: String,
  },

  batch_id: {
    type: String,
    ref: "stockin",
  },

  supplierName: {
    type: String,
    required: true,
  },

  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "stockin",
  },

  quantity_out: {
    type: Number,
    required: true,
  },

  availableQuantity: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  buyerName: {
    type: String,
    required: true,
  },

  buyerPhone: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("stockout", StockOutSchema);
