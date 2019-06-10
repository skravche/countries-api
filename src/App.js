import React, { Component } from 'react';
import CountriesExe from './components/coutriesExe';
import CountriesView from './components/coutriesView';

class App extends Component {
  render() {
    return (
      <div>
        <CountriesView />
        <CountriesExe />
      </div>
    );
  }
}

export default App;
