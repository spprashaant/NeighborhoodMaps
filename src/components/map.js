import React, { Component } from 'react';
import '../App.css';
/* global google */

class Map extends Component{
	getGoogleMaps() {
	    // If we haven't already defined the promise, define it
	    if (!this.googleMapsPromise) {
	      this.googleMapsPromise = new Promise((resolve) => {
	        // Add a global handler for when the API finishes loading
	        window.resolveGoogleMapsPromise = () => {
	          // Resolve the promise
	          resolve(google);

	          // Tidy up
	          delete window.resolveGoogleMapsPromise;
	        };

	        // Load the Google Maps API
	        const script = document.createElement("script");
	        const API = 'AIzaSyAenL9ugfiM_UsveL6hFPGzaynXYKv3xMs';
	        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
	        script.async = true;
	        document.body.appendChild(script);
	      	});
	    }

	    // Return a promise for the Google Maps API
	    return this.googleMapsPromise;
  	}

  	componentWillMount() {
		// Start Google Maps API loading since we know we'll soon need it
		this.getGoogleMaps();
	}

	

	componentDidMount() {
		const customStyle = [
			{
			    "featureType": "poi",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			 }
		];
	    // Once the Google Maps API has finished loading, initialize the map
	    this.getGoogleMaps().then((google) => {
	      const bengaluru = {lat: 13.030135755290635, lng: 77.56746130820443};
	      const map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 17,
	        center: bengaluru,
	        styles: customStyle
	      });
	      const marker = new google.maps.Marker({
	        position: bengaluru,
	        map: map
	      });
	    });
	}
	render() {
		return (
			<div id="map">

			</div>
			);
	}
}

export default Map;