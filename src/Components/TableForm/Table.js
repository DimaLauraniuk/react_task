import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import './Table.css';

class Table extends Component {
  
  render() {
    var tasks =  [
      { isDone: true, title: 'Create To do app', priority: 'Medium', date: '2018-01-01' },
      { isDone: false, title: 'Visit lesson', priority: 'Low', date: '2018-05-01' },
      { isDone: false, title: 'Have a rest', priority: 'Medium', date: '2018-01-01' },
      { isDone: true, title: 'Play with kids', priority: 'Medium', date: '2018-06-01' },
    ];
    return (
      <div className="Table">
        <table className='tableForm' border='1'>
          <TableHeader done='Done' title='Title' priority='Priority' date='Date' />
          <tbody>
            {tasks.map((task) => <TableRow task={task} />)}
          </tbody>        
        </table>
      </div>
    );
  }
}

export default Table;
