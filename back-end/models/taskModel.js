// lida com a lógica de dados (leitura e escrita do JSON)
const fs = require('fs');
const path = require('path');

// O '..' sobe um nível, pois este arquivo está dentro da pasta /models
const TASKS_FILE = path.join(__dirname, '..', 'tasks.json');

// Função para ler as tarefas do arquivo JSON
const readTasks = () => {
  try {
    const data = fs.readFileSync(TASKS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler arquivo:", error);
    return [];
  }
};


const writeTasks = (tasks) => {
  try {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2), 'utf8');
  } catch (error) {
    console.error("Erro ao escrever no arquivo:", error);
  }
};


module.exports = {
  readTasks,
  writeTasks
};