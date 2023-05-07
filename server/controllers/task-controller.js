const Task = require('../models/task');

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getTasks = (req, res) => {
  Task
    .find()
    .then((tasks) => {
      res
        .status(200)
        .json(tasks);
    })
    .catch((err) => {
      handleError(res, 'Something went wrong...');
    });
};

const deleteTask = (req, res) => {
  Task
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something went wrong..."));
};

const addTask = (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something went wrong..."));
};

const updateTask = (req, res) => {
  Task
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something went wrong..."));
};

module.exports = {
  getTasks,
  deleteTask,
  addTask,
  updateTask
};
