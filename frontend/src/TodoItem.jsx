import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  // A linha 5 (abaixo) define o estado inicial com 'todo.text'
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleToggle = () => {
    onToggle(todo.id, !todo.completed);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            className="todo-edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)} // <-- 'e' SÓ existe aqui dentro
            autoFocus
          />
          <div className="todo-item-actions">
            <button className="action-button save" onClick={handleSave}>💾</button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-item-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggle}
            />
            <span className={`todo-item-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
          </div>
          <div className="todo-item-actions">
            <button className="action-button edit" onClick={handleEdit}>✏️</button>
            <button className="action-button delete" onClick={() => onDelete(todo.id)}>❌</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;