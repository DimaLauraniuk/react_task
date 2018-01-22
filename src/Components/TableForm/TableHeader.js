import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>{this.props.done}</th>
          <th>{this.props.title}</th>
          <th>{this.props.priority}</th>
          <th>{this.props.date}</th>
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes ={
  done: PropTypes.string,
  title: PropTypes.string,
  priority: PropTypes.string,
  date: PropTypes.string  
};

export default TableHeader;