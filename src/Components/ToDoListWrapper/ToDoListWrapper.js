import React, { Component } from 'react';
import { Task } from '../AddTaskForm';
import FilterForm from '../FilterForm/index';
import Table from '../TableForm/Table';

import { getTasks, addTask, removeTask } from '../../Utils/apiWrapper';

class ToDoListWrapper extends Component {
  state = {
    tasks: []
  }
  componentWillMount() {
    getTasks().then((tasks) => this.setState({ tasks }));
  }
  addTask = (taskData) => {
    console.log(taskData);
    addTask(taskData).then((taskData) =>
      this.setState({
        tasks: [...this.state.tasks, taskData]
      }))
  }
  removeTask = (id) => {
    removeTask(id).then(() => this.setState({
      tasks: this.state.tasks.filter(item => item.id !== id)
    }))
  }
  render() {
    return (
      <div className="App">
        <Task title='Add task' onSubmit={this.addTask} />
        <br />
        <FilterForm />
        <br />
        <Table tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default ToDoListWrapper;