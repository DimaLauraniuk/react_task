import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
  render() {
    const {task}= this.props;
    return (
        <tr>
          
          <td><input
            name="isDone"
            type="checkbox"
            checked ={task.isDone}/>
          </td>
          <td>{task.title}</td>
          <td>{task.priority}</td>
          <td>{task.date}</td>
        </tr>
    );  

  }
}

TableRow.propTypes = {
  isDone: PropTypes.bool,
  title: PropTypes.string,
  priority: PropTypes.string,
  date: PropTypes.string
};


export default TableRow;