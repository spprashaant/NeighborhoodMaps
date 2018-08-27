import React, { Component } from 'react';
import LocationItem from './location-item';

const LocationList = (props) => {
	const locations = props.locations.map((location) => {
		return <LocationItem key={location.id} location={location} />
	})
	return (
		<ul className="col-md-4 list-group">
			{locations}
		</ul>
		);
}

export default LocationList;