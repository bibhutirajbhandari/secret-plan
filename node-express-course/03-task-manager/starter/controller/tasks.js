const getAllTasks = (req, res) => {
  res.send("all items from file");
};

const getTask = (req, res) => {
  res.send("get a task");
};

const createTask = (req, res) => {
  console.log(req.body);
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
