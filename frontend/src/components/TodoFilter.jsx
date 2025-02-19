import './TodoFilter.css';
import PropTypes from 'prop-types';

function TodoFilter({ currentFilter, onFilterChange }) {
  const filters = ['all', 'pending', 'completed'];

  return (
    <div className="filter-container">
      {filters.map((filterType) => (
        <button
          key={filterType}
          onClick={() => onFilterChange(filterType)}
          className={`filter-button ${currentFilter === filterType ? 'active' : ''}`}
        >
          {filterType}
        </button>
      ))}
    </div>
  );
}
TodoFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default TodoFilter;
