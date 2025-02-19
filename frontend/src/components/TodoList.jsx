import { Trash2, Check, Circle, Calendar, AlertCircle } from 'lucide-react';
import './TodoList.css';
import PropTypes from 'prop-types';

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <AlertCircle size={40} />
        <p>No tasks found</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <div className="todo-content">
            <button
              onClick={() => onToggle(todo.id)}
              className={`toggle-button ${todo.completed ? 'completed' : ''}`}
            >
              {todo.completed ? <Check size={16} /> : <Circle size={16} />}
            </button>
            <div className="todo-text">
              <span className="task-text">{todo.text}</span>
              <div className="date">
                <Calendar size={12} />
                <span>{todo.createdAt}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="delete-button"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;