import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Priority from '../PrioritySelect/index';

class Task extends Component {
  render() {
    return (
      <div className="AddTaskForm">
        <fieldset className='taskFormfieldset-auto-width'>
          <legend align="left">{this.props.title}</legend>
          <input name="title" placeholder='Title' type="text"/>
          &ensp;
          <Priority/>
          &ensp;
          <input name="date" type="date" data-placeholder="Date" required aria-required="true"/>
          <br /><br />
          <input className='formDescription' placeholder='Description' name="description" type="text" />
          <br /><br /><br />
          <input className="addTask" type='submit' value ='Add'/>
        </fieldset>
      </div>
    );
  }
}


Task.propTypes ={
  title: PropTypes.string  
};

export default Task;