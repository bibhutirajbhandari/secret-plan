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
  // petname: {
  //   type: String,
  //   required: [true, "must enter pet name"],
  //   trim: true,
  // },
  // petage: {
  //   type: String,
  //   required: [true, "define pet age"],
  //   trim: true,
  // },
  // contact: {
  //   type: Number,
  //   required: [true, "define owner's contact info"],
  //   trim: true,
  // },
});

module.exports = mongoose.model("pet-list", petSchema);
