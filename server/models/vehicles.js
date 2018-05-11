
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: {
    require: true,
    type: Number,
  },
  year: {
    required: true,
    type: String
  },
  make: {
    require: true,
    type: String
  },
  model: {
    require: true,
    type: String

  }
});

module.exports = mongoose.model("Vehicle", schema);




