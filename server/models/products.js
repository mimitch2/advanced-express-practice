const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: {
    require: true,
    type: Number,
  },
  name: {
    required: true,
    type: String
  },
  description: {
    require: true,
    type: String
  }
});

module.exports = mongoose.model("Product", schema);

