import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      priority: 'Priority',
      date: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="AddTaskForm">
        <fieldset className='taskFormfieldset-auto-width'>
          <legend align="left">AddTask</legend>
          <input name="title" placeholder='Title' type="text" value={this.state.title} onChange={this.handleChange} />
          &ensp;
          <select name="priority" value={this.state.priority} onChange={this.handleChange} >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          &ensp;
          <input name="date" type="date" data-placeholder="Date" required aria-required="true" value={this.state.date} onChange={this.handleChange} />
          <br /><br />
          <input className='formDescription' placeholder='Description' name="description" type="text" value={this.state.description} onChange={this.handleChange} />
          <br /><br /><br />
          <button className="addTask">Add</button>
        </fieldset>
      </div>
    );
  }
}


export default Task;