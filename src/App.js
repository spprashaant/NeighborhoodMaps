import React, { Component } from 'react';
import './App.css';
import LocationFilter from './components/location-filter';
import Map from './components/map';
import LocationList from './components/location-list';
import MenuIcon from './components/menu-icon';

class App extends Component {
    constructor(props) {
        super(props);
        //set the initial state
        this.state = {
            initialLocations: [],
            locations: [],
            selectedMarker: 0,
            latlng: ""
        };
    }

    //handle the filter text change
    handleChange = (e) => {
        let filterText = e.target.value;
        this.setState({
            locations: this.state.initialLocations.filter((l) => l.title.match(new RegExp(filterText, 'i')))
        });
    }
    //handle the list item click
    handleClick = (event, id) => {
      let sap = {ui:{keycodes:{SPACE:32, ENTER:13 }}};
      if (event.type==="click" ||
        event.keyCode === sap.ui.keycodes.ENTER) {
        var ref = event.target != null ? event.target : event.srcElement;
        if (ref) {
          this.setState({
            selectedMarker: id,
          });
        }
    }

    }
    //handle click on the map
    handleMapClick = (e) => {
        const navBar = document.querySelector("nav");
        navBar.classList.remove('open');
    }

    //get the current location
    getLocation = () => {
        navigator.geolocation.getCurrentPosition(response => {
            this.setState({
                latlng: response.coords.latitude + ',' + response.coords.longitude
            });
        });
    }
    //Search for nearby locations using FourSquare api
    searchLocations = () => {
        navigator.geolocation.getCurrentPosition(response => {
            this.setState({
                latlng: response.coords.latitude + ',' + response.coords.longitude
            });
        });
        const axios = require('axios');

        const params = {
            client_id: "4SKA2A1ZDUW2SSCIMNC1LSZ2USQ1SAVFZDTYDDKIINZYPCG3",
            client_secret: "MYOQCAVDRAY1JOKHJN54NENPA15QAC3RYMHXYIFZSDOBSQMZ",
            ll: "13.030135755290635, 77.56746130820443",
            v: "20182507",
            limit: "10"
        }
        const baseUrl = "https://api.foursquare.com/v2/venues/search";
        const self = this;
        axios.get(baseUrl, {
                params: params
            })
            .then(function(response) {
                // handle success
                const apiLocations = response.data.response.venues.map((venue) => {
                    return ({
                        "id": venue.id,
                        "title": venue.name,
                        "location": { "lat": venue.location.lat, "lng": venue.location.lng }
                    });
                });
                self.setState({
                    initialLocations: apiLocations,
                    locations: apiLocations
                })
            })
            .catch(function(error) {
                // handle error
                alert(error);
            });
    }
    componentDidMount() {
        this.searchLocations();
    }
    render() {
        return ( <
            div className = "App" >
            <
            MenuIcon / >
            <
            nav id = "drawer" >
            <
            section >
            <
            LocationFilter onChange = { this.handleChange }
            /> <
            /section> <
            section > Locations from Foursquare < /section> <
            section className = "locationList" >
            <
            LocationList onClick = { this.handleClick } locations = { this.state.locations }
            /> <
            /section>

            <
            /nav> <
            article onClick = { this.handleMapClick } className = "mapArea" >
            <
            Map selectedMarker = { this.state.selectedMarker } locations = { this.state.locations }
            /> <
            /article> <
            /div>
        );
    }
}

export default App;