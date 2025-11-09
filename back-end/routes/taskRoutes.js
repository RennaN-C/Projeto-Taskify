    // define os endpoints da API
const express = require('express');
const router = express.Router();

// Importamos os controllers
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// Mapeia os verbos HTTP para os controllers
// Rota base '/' aqui é '/tasks' (definido no server.js)
router.get('/', getAllTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;