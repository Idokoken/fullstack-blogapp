const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    photo: { type: String },
    username: { type: String, required: true },
    categories: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
