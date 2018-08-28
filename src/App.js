import React, { Component } from 'react';
import './App.css';
import LocationFilter from './components/location-filter';
import Map from './components/map';
import LocationList from './components/location-list';

class App extends Component {
  
  

  constructor(props){
    super(props);

    this.initialLocations = [
                  {id: 1, title: 'MS Ramaiah Medical College', location: {lat: 13.030094, lng: 77.567676}},
                  {id: 2, title: 'Ramaiah College of Law', location: {lat: 13.031599, lng: 77.565401}},
                  {id: 3, title: 'Nandhini Deluxe', location: {lat: 13.031704, lng: 77.570337}},
                  {id: 4, title: 'Fab India', location: {lat: 13.030742, lng: 77.570444}},
                  {id: 5, title: 'ICICI Bank', location: {lat: 13.028693, lng: 77.571463}},
                  {id: 6, title: 'PMC Park', location: {lat: 13.029331, lng: 77.566517}},
                ];
    this.intialMarkers = this.initialLocations.map((l) => {
        return {
          title: l.title,
          position: l.location,
          id: l.id
        }
      });

    this.state = {
      locations: this.initialLocations,
      markers: this.intialMarkers,
      selectedMarkerChanged: false,
      selectedMarker: 0
    };
  }

  handleChange = (e) => {
    let filterText = e.target.value;
    this.setState({
      locations: this.initialLocations.filter((l) => l.title.match(new RegExp(filterText,'i')))
    });
  }
  handleClick = (id) => {
    this.setState({
      selectedMarker: id,
      selectedMarkerChanged: true
    });
  }
  handleListItemClick = () => {
    this.setState({
      selectedMarkerChanged: false
    });
  }
  render() {
    return (
      <div className="App">
        <div>
        <LocationFilter onChange={this.handleChange} />
        </div>
        <div><LocationList onClick={this.handleClick} locations={this.state.locations} /></div>
        <div>
        <Map selectedMarkerChanged={this.state.selectedMarkerChanged} selectedMarker={this.state.selectedMarker} onListItemClick={this.handleListItemClick} locations={this.state.locations} />
        </div>
      </div>
    );
  }
}

export default App;
