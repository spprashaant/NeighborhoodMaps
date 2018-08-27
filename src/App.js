import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationFilter from './components/location-filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationFilter />
      </div>
    );
  }
}

export default App;
