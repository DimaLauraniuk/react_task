import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isDone,
      title: '',
      priority: '',
      date: '16.01.2018'
    };
  }
  render() {
    return (
      <tbody>
        <tr>
          <td><input
            name="isDone"
            type="checkbox"
            checked ={this.state.isChecked}/>
          </td>
          <td>{this.props.title}</td>
          <td>{this.props.priority}</td>
          <td>{this.props.date}</td>
        </tr>
      </tbody>
    );  

  }
}

TableRow.propTypes = {
  isDone: PropTypes.bool,
  title: PropTypes.string,
  priority: PropTypes.string,
  date: PropTypes.string
};


export default TableRow;