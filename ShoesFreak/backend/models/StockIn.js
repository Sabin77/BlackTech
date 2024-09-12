const mongoose = require("mongoose");
const { Schema } = mongoose;

const StockInSchema = new Schema({
  batch_id: {
    type: String,
    required: true,
    unique: true,
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },

  productName: {
    type: String,
    required: true,
  },

  productImage: {
    type: String,
  },

  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },

  supplierName: {
    type: String,
    required: true,
  },

  quantity_in: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("stockin", StockInSchema);
