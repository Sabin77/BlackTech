const mongoose = require("mongoose");
const { type } = require("server/reply");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
  },

  productImage: {
    type: String,
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  quantity_limit: {
    type: Number,
    required: true,
  },
  color: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model("product", ProductSchema);
