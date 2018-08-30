import React, { Component } from 'react';
import './App.css';
import LocationFilter from './components/location-filter';
import Map from './components/map';
import LocationList from './components/location-list';
import MenuIcon from './components/menu-icon';

class App extends Component {
  
  

  constructor(props){
    super(props);

    // this.initialLocations = [
    //               {id: 1, title: 'MS Ramaiah Medical College', location: {lat: 13.030094, lng: 77.567676}},
    //               {id: 2, title: 'Ramaiah College of Law', location: {lat: 13.031599, lng: 77.565401}},
    //               {id: 3, title: 'Nandhini Deluxe', location: {lat: 13.031704, lng: 77.570337}},
    //               {id: 4, title: 'Fab India', location: {lat: 13.030742, lng: 77.570444}},
    //               {id: 5, title: 'ICICI Bank', location: {lat: 13.028693, lng: 77.571463}},
    //               {id: 6, title: 'PMC Park', location: {lat: 13.029331, lng: 77.566517}},
    //             ];

    this.state = {
      initialLocations: [],
      locations: [],
      selectedMarkerChanged: false,
      selectedMarker: 0,
      latlng: ""
    };
  }

  handleChange = (e) => {
    let filterText = e.target.value;
    this.setState({
      locations: this.state.initialLocations.filter((l) => l.title.match(new RegExp(filterText,'i')))
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
  handleMapClick = (e) => {
    const navBar = document.querySelector("nav");
      navBar.classList.remove('open');
  }
  loadLocations = (data) => {
    console.log(data);
  }
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(response => {
      this.setState({
        latlng: response.coords.latitude + ',' + response.coords.longitude
      });
    });
  }
  searchLocations = () => {
    navigator.geolocation.getCurrentPosition(response => {
      this.setState({
        latlng: response.coords.latitude + ',' + response.coords.longitude
      });
    });
    const endPoint = "https://api.foursquare.com/v2/venues/search?";
    const params = {
      client_id: "4SKA2A1ZDUW2SSCIMNC1LSZ2USQ1SAVFZDTYDDKIINZYPCG3",
      client_secret: "MYOQCAVDRAY1JOKHJN54NENPA15QAC3RYMHXYIFZSDOBSQMZ",
      ll: this.state.latlng,
      v: "20182507",
      limit: "10"
    }
    fetch(`https://api.foursquare.com/v2/venues/search?client_id=${params.client_id}&client_secret=${params.client_secret}&v=${params.v}&ll=13.030135755290635, 77.56746130820443&limit=${params.limit}`).then(results => {
          return results.json();
        }).then(data => {
          const apiLocations = data.response.venues.map((venue) => {
              return (
                {"id": venue.id, 
                  "title": venue.name, 
                  "location": {"lat": venue.location.lat, "lng": venue.location.lng}
                }
              );
            });
          this.setState({
            initialLocations: apiLocations,
            locations: apiLocations
          })
        })
        .catch(e => console.log(e));
  }
  componentDidMount() {
    this.searchLocations();
  }
  render() {
    return (
      <div className="App">
        <MenuIcon />
        <nav id="drawer">
          <div>
            <LocationFilter onChange={this.handleChange} />
          </div>
          <div className="locationList">
            <LocationList onClick={this.handleClick} locations={this.state.locations} />
          </div>
        </nav>
        <div onClick={this.handleMapClick} className="mapArea">
          <Map selectedMarkerChanged={this.state.selectedMarkerChanged} selectedMarker={this.state.selectedMarker} onListItemClick={this.handleListItemClick} locations={this.state.locations} />
        </div>
      </div>
    );
  }
}

export default App;
