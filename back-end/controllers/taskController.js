// lida com a lógica da requisição (o que fazer)
const { readTasks, writeTasks } = require('../models/taskModel');

// 1. Controller para GET /tasks
const getAllTasks = (req, res) => {
  const tasks = readTasks();
  console.log('GET /tasks: Enviando', tasks.length, 'tarefas.');
  res.json(tasks);
};

// 2. Controller para POST /tasks
const createTask = (req, res) => {
  const tasks = readTasks();
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'O texto é obrigatório' });
  }

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  writeTasks(tasks);

  console.log('POST /tasks: Tarefa adicionada ->', newTask.text);
  res.status(201).json(newTask);
};

// 3. Controller para PUT /tasks/:id
const updateTask = (req, res) => {
  const tasks = readTasks();
  const taskId = parseInt(req.params.id);
  const { text, completed } = req.body;

  let taskUpdated = false;
  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      const updatedTask = {
        ...task,
        text: text !== undefined ? text : task.text,
        completed: completed !== undefined ? completed : task.completed
      };
      taskUpdated = true;
      console.log('PUT /tasks/:id: Tarefa atualizada ->', updatedTask.text);
      return updatedTask;
    }
    return task;
  });

  if (taskUpdated) {
    writeTasks(updatedTasks);
    res.json(updatedTasks.find(t => t.id === taskId));
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
};

// 4. Controller para DELETE /tasks/:id
const deleteTask = (req, res) => {
  let tasks = readTasks();
  const taskId = parseInt(req.params.id);

  const newTasks = tasks.filter(task => task.id !== taskId);

  if (tasks.length === newTasks.length) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  writeTasks(newTasks);
  console.log('DELETE /tasks/:id: Tarefa removida ->', taskId);
  res.status(204).send();
};

// Exportamos todas as funções
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};