const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const { findById } = require("../models/tasks");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  console.log(tasks);
  res
    .status(200)
    .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;

  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }
  res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;

  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }
  res.status(200).json({ task: null, status: "success" });
});

const clearDesc = asyncWrapper(async (req, res) => {
  const id = req.params.id;

  const task = await Task.findById(id);
  console.log(task);
  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }

  if ("desc" in task) {
    task["desc"] = " ";
    await task.save();
    // await task.updateOne({ desc: "75d6rtyhjnht" });
    res.status(201).json(task);
  }
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
  clearDesc,
};
