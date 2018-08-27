import React, { Component } from 'react';
import './App.css';
import LocationFilter from './components/location-filter';
import Map from './components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <LocationFilter />
        </div>
        <div>
        <Map />
        </div>
      </div>
    );
  }
}

export default App;
