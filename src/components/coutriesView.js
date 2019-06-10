import React, { Component } from 'react';
import CountriesExe from './coutriesExe';

class CountriesView extends Component {
  render() {
    return (
      <div>
        <input onChange={e => this.setState({ items: e.target.value })} />
        <button onClick={this}>Send </button>
        <button onClick={this}>Clean </button>
      </div>
    );
  }
}

export default CountriesView;
