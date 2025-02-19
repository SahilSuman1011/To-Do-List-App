import { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import './TodoForm.css';
import PropTypes from 'prop-types';

function TodoForm({ onSubmit }) {
  const [newTodo, setNewTodo] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }
    onSubmit(newTodo.trim());
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          <Plus size={20} />
          Add
        </button>
      </div>
      {isError && (
        <div className="error-message">
          <AlertCircle size={16} />
          <span>Please enter a task</span>
        </div>
      )}
    </form>
  );
}
TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;