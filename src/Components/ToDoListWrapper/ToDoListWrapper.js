import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskForm from '../AddTaskForm/index';
import FilterForm from '../FilterForm/index';
import TableForm from '../TableForm/index';


class ToDoListWrapper extends Component {
  render() {
    return (
      <div className="App">
        <TaskForm title='Add task' />
        <br />
        <FilterForm />
        <br />
        <TableForm />
      </div>
    );
  }
}

export default ToDoListWrapper;