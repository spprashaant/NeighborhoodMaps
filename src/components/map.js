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
	constructor(props){
		super(props);
		this.map = null;
		this.locations = this.props.locations;
	    this.markers = [];
	    this.largeInfoWindow = null;
	    this.bounds = null;
	}

	populateInfoWindow(marker, infoWindow){
	      	if(infoWindow.marker != marker){
	      		infoWindow.marker = marker;
	      		infoWindow.setContent('<div>' + marker.title + '</div>');
	      		infoWindow.open(this.map, marker);
	      		infoWindow.addListener('closeClick', function(){
	      			infoWindow.setMarker(null);
	      		});
	      	}
	}
	setMap() {
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

		const locations = this.props.locations;
	    this.largeInfoWindow = new google.maps.InfoWindow();
	    this.bounds = new google.maps.LatLngBounds();
	    let self = this;

		const bengaluru = {lat: 13.030135755290635, lng: 77.56746130820443};
	      this.map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 17,
	        center: bengaluru,
	        styles: customStyle
	      });

	      this.markers = locations.map((l) => {
	      	const marker = new google.maps.Marker({
	      		title: l.title,
            	position: l.location,
            	id: l.id,
            	map: this.map
	      	})
	      	this.bounds.extend(marker.position);

	      	marker.addListener('click', function(){
	      		self.populateInfoWindow(this, self.largeInfoWindow);
	      	});
	      	return marker;
	      });

	      this.map.fitBounds(this.bounds);
	}
	// Sets the map on all markers in the array.
    setMapOnAll(map) {
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(map);
        }
    }
	updateMap(nextProps) {
		this.setMapOnAll(null);
	    const locations = nextProps.locations;

	    let self = this;
	    this.markers = locations.map((l) => {
	      	const marker = new google.maps.Marker({
	      		title: l.title,
            	position: l.location,
            	id: l.id,
            	map: this.map
	      	});
			marker.addListener('click', function() {
				self.populateInfoWindow(this, self.largeInfoWindow);
			});
	      	
	      	return marker;
	      });
	}
	updateListItemClick(nextProps){
	    const markerChanged = nextProps.selectedMarkerChanged;
	    const selectedMarker = nextProps.selectedMarker;

	    let self = this;
	    this.markers.map((m) => {
	      	if(markerChanged && selectedMarker === m.id){
	      		self.populateInfoWindow(m, self.largeInfoWindow);
	      	}
	      });
	}
	componentDidUpdate(prevProps) {
		const markerChanged = prevProps.selectedMarkerChanged;
	  	if(markerChanged){
	      	prevProps.onListItemClick();
      	}
	}
	componentDidMount() {
		
	    // Once the Google Maps API has finished loading, initialize the map
	    this.getGoogleMaps().then((google) => {
	      this.setMap();
	    });
	}

	componentWillReceiveProps(nextProps) {
		this.updateMap(nextProps);
        if(nextProps.selectedMarker !== this.props.selectedMarker){
  			this.updateListItemClick(nextProps);
  		}
  	}
 //  	shouldComponentUpdate(nextProps, nextState) {
 //  		if(nextProps.selectedMarker !== this.props.selectedMarker){
 //  			this.updateMap(nextProps);
 //  		}
 //    	return nextProps.selectedMarker !== this.props.selectedMarker;
	// }
	render() {
		return (
			<div id="map">

			</div>
			);
	}
}

export default Map;