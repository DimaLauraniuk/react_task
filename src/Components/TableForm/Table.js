import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import './Table.css';

class Table extends Component {
  state = {
    tasks: []
  }
  render() {
    const {
      tasks = []
    } = this.props;
    return (
      <div className="Table">
        <table className='tableForm' border='1'>
          <TableHeader id='Id' done='Done' title='Title' priority='Priority' date='Date' remove ='Remove' />
          <tbody>
            {tasks.map((task) => <TableRow key={task.id} task={task} removeTask={this.props.removeTask}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes ={
  tasks: PropTypes.array,
  removeTask: PropTypes.func
};

export default Table;