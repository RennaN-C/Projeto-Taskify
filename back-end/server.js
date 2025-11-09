// apenas inicia o servidor e conecta tudo
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes'); // Importa o arquivo de rotas

const app = express();
const PORT = 3001;

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- Rotas ---
// Diz ao Express para usar o 'taskRoutes' para qualquer
// requisição que comece com '/tasks'
app.use('/tasks', taskRoutes);

// --- Iniciar o Servidor ---
app.listen(PORT, () => {
  console.log(`🚀 Servidor back-end MVC rodando em http://localhost:${PORT}`);
});