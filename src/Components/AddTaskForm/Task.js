import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PrioritySelect } from '../PrioritySelect';
import './Task.css';

export class Task extends Component {
  onSubmit(ev) {
    ev.preventDefault();
    let data = [...ev.target.querySelectorAll('[name]')]
      .reduce((hash, item) => ({
        ...hash,
        [item.getAttribute('name')]: item.value
      }), {});
    this.props.onSubmit(data);
    ev.target.reset();
  }

  render() {
    return (
      <form className="AddTaskForm" onSubmit={this.onSubmit.bind(this)}>
        <fieldset className='taskFormfieldset-auto-width'>
          <legend align="left">{this.props.title}</legend>
          <input name="title" placeholder='Title' type="text" />
          &ensp;
          <PrioritySelect name='priority' />
          &ensp;
          <input name="date" type="date" />
          <br /><br />
          <textarea placeholder='Description' name="description" />
          <br /><br /><br />
          <input className="submit" type='submit' value='Add' />
        </fieldset>
      </form>
    );
  }
}


Task.propTypes = {
  title: PropTypes.string
};