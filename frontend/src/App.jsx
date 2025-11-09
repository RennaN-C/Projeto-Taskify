import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const API_URL = 'http://localhost:3001';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTaskText, setNewTaskText] = useState('');

 
useEffect(() => {
  fetch(`${API_URL}/tasks`)
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch(error => console.error('Erro ao buscar tarefas:', error));
}, []); 

  const handleAddTask = (e) => {
    e.preventDefault();
    const text = newTaskText.trim();
    if (!text) return;

    fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(newTask => {
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    })
    .catch(error => console.error('Erro ao adicionar tarefa:', error));
  };

  const handleDeleteTask = (id) => {
    fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setTasks(tasks.filter(task => task.id !== id));
      }
    })
    .catch(error => console.error('Erro ao excluir tarefa:', error));
  };

  const handleToggleTask = (id, newCompletedStatus) => {
    fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: newCompletedStatus })
    })
    .then(response => response.json())
    .then(updatedTask => {
      setTasks(tasks.map(task =>
        task.id === id ? updatedTask : task
      ));
    })
    .catch(error => console.error('Erro ao atualizar status:', error));
  };

  const handleEditTask = (id, newText) => {
    fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newText })
    })
    .then(response => response.json())
    .then(updatedTask => {
      setTasks(tasks.map(task =>
        task.id === id ? updatedTask : task
      ));
    })
    .catch(error => console.error('Erro ao editar tarefa:', error));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <> {}
      
      <img src="/taskify_logo.png" alt="Taskify Logo" className="global-logo" />

      <div className="app-container">
        
       

        <form className="form-container" onSubmit={handleAddTask}>
          <input
            type="text"
            className="form-input"
            placeholder="Adicionar nova tarefa..."
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <button type="submit" className="form-button">Adicionar</button>
        </form>

        <div className="filter-container">
          <button onClick={() => setFilter('all')} className={`filter-button ${filter === 'all' ? 'active' : ''}`}>Todas</button>
          <button onClick={() => setFilter('pending')} className={`filter-button ${filter === 'pending' ? 'active' : ''}`}>Pendentes</button>
          <button onClick={() => setFilter('completed')} className={`filter-button ${filter === 'completed' ? 'active' : ''}`}>Concluídas</button>
        </div>

        <ul className="todo-list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map(task => (
              <TodoItem
                key={task.id}
                todo={task}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>Nenhuma tarefa encontrada.</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;