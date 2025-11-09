<p align="center"> <img src="https://github.com/RennaN-C/Projeto-Taskify/blob/main/frontend/public/taskify_logo.png" alt="Logo Taskify" width="300px" /> </p>

<h1 align="center"> Taskify </h1>

<p align="center"> Uma aplicação full-stack de lista de tarefas com React, Node.js e Express. </p>

<p align="center"> <img alt="Linguagem Principal" src="https://img.shields.io/github/languages/top/[SEU_USUARIO_GITHUB]/[NOME_DO_REPOSITORIO]?style=for-the-badge&color=007bff"> <img alt="Status do Projeto" src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge"> </p>

📝 Sobre o Projeto
Taskify é uma aplicação web completa de lista de tarefas (To-Do List). Este projeto foi desenvolvido para demonstrar a integração entre um front-end moderno e uma API REST no back-end, atendendo a todos os requisitos de um projeto full-stack.

O front-end é construído em React e consome uma API REST. O back-end é uma API Node.js/Express organizada no padrão MVC (Model-View-Controller) que, em vez de um banco de dados complexo, persiste os dados em um arquivo tasks.json local.

✨ Funcionalidades
✅ Adicionar novas tarefas.

✅ Marcar tarefas como concluídas (ou pendentes).

✅ Editar o texto de tarefas existentes.

✅ Excluir tarefas.

✅ Filtrar visualização (Todas, Pendentes, Concluídas).

🛠️ Tecnologias Utilizadas
O projeto é dividido em duas partes principais:

⚛️ Front-End
React.js (com Vite)

React Hooks (useState, useEffect)

CSS3 (Estilização moderna)

Fetch API (para comunicação com o back-end)

⚙️ Back-End
Node.js

Express.js (para o servidor e rotas da API)

Arquitetura MVC (Model-View-Controller)

Armazenamento: tasks.json (usando o módulo fs do Node)

CORS (para permitir a comunicação entre front e back)

<p align="center"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"> </p>

🚀 Como Executar o Projeto
Para rodar este projeto localmente, você precisará ter o Node.js instalado e dois terminais abertos (um para o back-end e outro para o front-end).

Bash

# 1. Clone o repositório
git clone https://github.com/[RennaN-C]/[Projeto-Taskify].git

# 2. Navegue para a pasta do projeto
cd [NOME_DO_REPOSITORIO]
💻 Terminal 1: Back-End (Servidor)
Bash

# Navegue para a pasta do back-end
cd backend

# Instale as dependências
npm install

# Inicie o servidor
node server.js
O servidor estará rodando em http://localhost:3001

🎨 Terminal 2: Front-End (React)
Bash

# Navegue para a pasta do front-end
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
A aplicação abrirá automaticamente no seu navegador em http://localhost:5173

👨‍💻 Autor
[Rennan Cardoso]
