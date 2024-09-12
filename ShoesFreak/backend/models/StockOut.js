const mongoose = require("mongoose");
const { Schema } = mongoose;

const StockOutSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },

  quantity_out: {
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

module.exports = mongoose.model("stockout", StockOutSchema);
