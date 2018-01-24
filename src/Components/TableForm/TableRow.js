import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
  changeTaskProperty(propName, value) {
    this.props.updateTask(this.props.task.id, {
      [propName]: value
    });
  }
  render() {
    const { task, removeTask } = this.props;
    return (
      <tr>
        <td>{task.id}</td>
        <td><input
          name="isDone"
          type="checkbox"
          checked={task.isDone}
          onChange={(ev) =>
            this.changeTaskProperty('isDone', ev.target.checked)} />
        </td>
        <td>{task.title}</td>
        <td>{task.priority}</td>
        <td>{task.date}</td>
        <td><button onClick={() => removeTask(task.id)}>X</button></td>
      </tr>
    );

  }
}

TableRow.propTypes = {
  task: PropTypes.object,
  removeTask: PropTypes.func,
  updateTask: PropTypes.func
};

export default TableRow;