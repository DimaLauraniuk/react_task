import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <table className='tableForm' border='1'>
          <TableHeader />
          <TableRow isDone={false} title='TEST1' priority='High' date='16.01.2017' />
          <TableRow isDone={true} title='TEST2' priority='Low' date='6.02.2017' />
          <TableRow isDone={true} title='TEST3' priority='Medium' date='13.11.2014' />
          <TableRow isDone={false} title='TEST4' priority='High' date='26.1.2015' />
        </table>
      </div>
    );
  }
}

export default Table;
