const mongoose = require("mongoose");
const { type } = require("server/reply");
const { Schema } = mongoose;

const SupplierSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
  },

  companyname: {
    type: String,
  },

  companylogo: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("supplier", SupplierSchema);
