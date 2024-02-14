const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Request", RequestSchema);