import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHeaderWithSortArrows extends Component {
  drawSortButtons() {
    return (
      <div>
        <div className="arrow-up" onClick ={()=>this.props.setSort(true)}></div>
        <div className="arrow-down" onClick ={()=>this.props.setSort(false)}></div>
      </div>
    );
  }
  render() {
    return (
          <th>
          <label>{this.props.label}</label>
          {this.props.setSort && this.drawSortButtons()}
          </th>
    );
  }
}

TableHeaderWithSortArrows.propTypes = {
  label: PropTypes.string,
  setSort: PropTypes.func
};

export default TableHeaderWithSortArrows;