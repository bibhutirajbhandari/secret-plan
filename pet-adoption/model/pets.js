const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  state: {
    type: String,
    required: [true, "enter a state name"],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "enter a city name"],
    trim: true,
  },
  breed: {
    type: String,
    required: [true, "must enter your choice of dog breed"],
    trim: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("pet-list", petSchema);
