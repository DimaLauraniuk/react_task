import React, { Component } from 'react';

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Done</th>
          <th>Title</th>
          <th>Priority</th>
          <th>Date</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;