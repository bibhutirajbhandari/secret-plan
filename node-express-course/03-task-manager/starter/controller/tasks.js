const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

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
  const timer =  setTimeout()
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

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
