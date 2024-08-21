const mongoose = require("mongoose");
const { type } = require("server/reply");
const { Schema } = mongoose;

const StockInSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },

  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },

  expiry_date: {
    type: String,
    required: true,
  },

  quantity: {
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
