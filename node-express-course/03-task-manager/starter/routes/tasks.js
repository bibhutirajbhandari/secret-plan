const express = require("express");
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");
const router = express.Router();

router.route("/tasks").get(getAllTasks).post(createTask);
router.route("/tasks/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
