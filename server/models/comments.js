const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: {
    require: true,
    type: Number,
  },
  body: {
    required: true,
    type: String
  },
  postId: {
    require: false,
    type: Number
  }
});

module.exports = mongoose.model("Comment", schema);
