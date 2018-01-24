import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import sortBy from '../../Utils/sortBy';
import './Table.css';

class Table extends Component {
  state = {
    tasks: [],
    order: 'id'
  }
  render() {
    const {
      tasks = [],
      updateTask,
      removeTask
    } = this.props;
    let sortedTasks = sortBy(tasks, this.state.order);
    return (
      <div className="Table">
        <table className='tableForm' border='1'>
          <TableHeader setOrder={(order) => this.setState({ order })} />
          <tbody>
            {sortedTasks.map((task) =>
              <TableRow key={task.id} task={task} removeTask={removeTask} updateTask={updateTask} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  updateTask: PropTypes.func
};

export default Table;