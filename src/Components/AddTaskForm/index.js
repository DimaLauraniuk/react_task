import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './Task.css';

export default class TaskForm extends Component {
    render() {
        return (
            <Task title={this.props.title} />
        );
    }
}

TaskForm.propTypes = {
    title: PropTypes.string
};