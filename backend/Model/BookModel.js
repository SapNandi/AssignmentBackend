const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Book Name"],
    trim: true,
  },
  ISBN: {
    type: String,
    required: [true, "Please Enter ISBN Number"],
    maxLength: [13, "ISBN cannot exceed 13 characters"],
    minLength: [13, "Invalid ISBN"],
  },
  author: {
    type: String,
    required: [true, "Please Enter Author Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Book Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Book Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  category: {
    type: String,
    required: [true, "Please Enter Book Category"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", bookSchema);
