import React, { Component } from 'react';
import './App.css';
import ToDoListWrapper from './Components/ToDoListWrapper/ToDoListWrapper';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToDoListWrapper/>
      </div>
    );
  }
}

export default App;