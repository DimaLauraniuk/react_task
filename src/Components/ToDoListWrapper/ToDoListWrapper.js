import React, { Component } from 'react';
import { Task } from '../AddTaskForm';
import { Filter } from '../FilterForm';
import Table from '../TableForm/Table';

import { getTasks, addTask, removeTask, updateTask } from '../../Utils/apiWrapper';

class ToDoListWrapper extends Component {
  state = {
    tasks: [],
    filter: {
      showCompleted: true
    }
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
    let tasks = this.state.tasks;
    this.setState({
      tasks: this.state.tasks.filter(item => item.id !== id)
    });
    removeTask(id).catch(() => this.setState({
      tasks
    }));
  }
  updateTask = (id, changes) => {
    updateTask(id, changes).then((updatedItem) => this.setState({
      tasks: this.state.tasks.map(item => item.id !== id ? item : {
        ...item,
        ...updatedItem
      })
    }))
  }

  onFilterUpdate = (changes) => {
    this.setState({
      filter: {
        ...this.state.filter,
        ...changes
      }
    });
  }

  render() {
    const {
      tasks,
      filter,
      filter: { showCompleted }
    } = this.state;
    const filteredTasks = showCompleted ? tasks : tasks.filter((item) => !item.isDone);
    console.log(this.state);
    return (
      <div className="App">
        <Task title='Add task' onSubmit={this.addTask} />
        <br />
        <Filter filter={filter} onFilterUpdate={this.onFilterUpdate} />
        <Table tasks={filteredTasks} removeTask={this.removeTask} updateTask={this.updateTask} />
      </div>
    );
  }
}

export default ToDoListWrapper;