import './TodoStats.css';
import PropTypes from 'prop-types';

function TodoStats({ stats }) {
  return (
    <div className="stats-container">
      <span>Total: {stats.total}</span>
      <span>Completed: {stats.completed}</span>
      <span>Pending: {stats.pending}</span>
    </div>
  );
}

TodoStats.propTypes = {
  stats: PropTypes.shape({
    total: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
  }).isRequired,
};

export default TodoStats;