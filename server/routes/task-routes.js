const express = require('express');
const { getTasks, deleteTask, addTask, updateTask } = require('../controllers/task-controller');

const router = express.Router();

router.get('/tasks', getTasks);
router.delete('/tasks/:id', deleteTask);
router.post('/tasks', addTask);
router.patch('/tasks/:id', updateTask);

module.exports = router;
