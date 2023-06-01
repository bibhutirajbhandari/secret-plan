const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must need name"],
    trim: true,
    maxlength: [20, "length cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  //desc
  desc: {
    type: String,
    required: [false, "task description is optional"],
    default: "",
    maxlength: [150, "length should be less than 150 characters"],
  },
});

module.exports = mongoose.model("Task", taskSchema);
