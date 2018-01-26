import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PrioritySelect extends Component {
  render() {
    return (
          <select required name={this.props.name} defaultValue={'Medium'}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
    );
  }
}

PrioritySelect.propTypes ={
  name: PropTypes.string  
};