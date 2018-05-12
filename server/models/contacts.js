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
  occupation: {
    require: false,
    type: String
  },
  avatar: {
    require: false,
    type: String
  }
});

module.exports = mongoose.model("Contact", schema);
