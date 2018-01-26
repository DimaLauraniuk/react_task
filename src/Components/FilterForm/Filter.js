import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

export class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <fieldset className='filterFormfieldset-auto-width'>
          <legend align="left">Filter</legend>
          <input
            type="checkbox"
            checked={this.props.filter.showCompleted}
            onChange={(ev) => this.props.onFilterUpdate({ showCompleted: ev.target.checked })} ></input>
          <label>
            Show Completed
          </label>
          &ensp;
          <label>
            {'From'}
            &ensp;
            <input name="dateFrom" type="date" />
          </label>
          <label>
            {'To'}
            &ensp;
            <input name="dateTo" type="date"></input>
          </label>
          <br /><br />
          <input className='textSearch' placeholder='Text search (title + description)' name="search" type="text" />
        </fieldset>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterUpdate: PropTypes.func,
  filter: PropTypes.object
}
