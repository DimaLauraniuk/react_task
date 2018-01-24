import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeaderWithSortArrows from './TableHeaderWithSortArrows';

class TableHeader extends Component {
  render() {
    const orderBy = (name) => (order) => this.props.setOrder(`${order ? '':'-'}${name}`);
    return (
      <thead>
        <tr>
          <TableHeaderWithSortArrows label='Id' setSort={orderBy('id')}/>
          <TableHeaderWithSortArrows label='Done' setSort={orderBy('done')}/>
          <TableHeaderWithSortArrows label='Title' setSort={orderBy('title')}/>
          <TableHeaderWithSortArrows label='Priority'/>
          <TableHeaderWithSortArrows label='Date'/>
          <TableHeaderWithSortArrows label='Remove'/>
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  setOrder: PropTypes.func
};

export default TableHeader;