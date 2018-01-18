import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: true,
      dateFrom: '',
      dateTo: '',
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="Filter">
        <fieldset className='filterFormfieldset-auto-width'>
          <legend align="left">Filter</legend>
          <label>
            Show Completed
             <input
              name="showCompleted"
              type="checkbox"
              onChange={this.handleChange} />
          </label>
          &ensp;
          <input name="dateFrom" type="date" value={this.state.dateFrom} onChange={this.handleChange} />
          &ensp;
          <input name="dateTo" type="date" value={this.state.dateTo} onChange={this.handleChange} />
          <br/><br/>
          <input className='textSearch'  placeholder='Text search (title + description)' name="search" type="text" value={this.state.search} onChange={this.handleChange} />
          <br /><br /><br />
          <button className='filterBtn'>Filter</button>
        </fieldset>
      </div>
    );
  }
}

export default Filter;