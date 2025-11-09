Taskify
📝 Descrição
Taskify é uma aplicação web full-stack de lista de tarefas (To-Do List). Este projeto foi desenvolvido como um trabalho final para demonstrar a integração entre um front-end moderno e uma API REST no back-end.

O front-end é construído em React e consome uma API REST. O back-end é uma API Node.js/Express organizada no padrão MVC (Model-View-Controller) que, em vez de um banco de dados complexo, persiste os dados em um arquivo tasks.json local.

✨ Funcionalidades Principais
Adicionar novas tarefas.

Marcar tarefas como concluídas (ou pendentes).

Editar o texto de tarefas existentes.

Excluir tarefas.

Filtrar visualização (Todas, Pendentes, Concluídas).

💻 Tecnologias Utilizadas
O projeto é dividido em duas partes principais:

Front-End
React.js (com Vite)

Hooks (useState, useEffect)

CSS3 (Estilização moderna)

Fetch API (para comunicação com o back-end)

Back-End
Node.js

Express.js (para o servidor e rotas da API)

Arquitetura MVC (Model-View-Controller)

Armazenamento: tasks.json (usando o módulo fs do Node)

CORS (para permitir a comunicação entre front e back)

🚀 Como Executar o Projeto
Para rodar este projeto localmente, você precisará ter o Node.js instalado e dois terminais abertos (um para o back-end e outro para o front-end).

Bash

# 1. Clone o repositório
git clone [https://github.com/RennaN-C/Projeto-Taskify]

# 2. Navegue para a pasta do projeto
cd projeto-fullstack-todo
1. Executando o Back-End (Servidor)
No seu primeiro terminal:

Bash

# Navegue para a pasta do back-end
cd backend

# Instale as dependências
npm install

# Inicie o servidor
node server.js
O servidor estará rodando em http://localhost:3001

2. Executando o Front-End (React)
Em um segundo terminal:

Bash

# Navegue para a pasta do front-end
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
A aplicação abrirá automaticamente no seu navegador em http://localhost:5173 (ou uma porta similar).

👨‍💻 Autor
[Rennan Cardoso]
