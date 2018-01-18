import React, { Component } from 'react';
import './App.css';
import TaskForm from './AddTaskForm/index';
import FilterForm from './FilterForm/index';
import TableForm from './TableForm/index';

class App extends Component {

  render() {
    return (
      <div className="App">
      <TaskForm/>
      <br />
      <FilterForm/>
      <br />
      <TableForm/>
      </div>
    );
  }
}

export default App;