const mongoose = require("mongoose");

const { Schema } = mongoose;

const trailSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trail", trailSchema);
