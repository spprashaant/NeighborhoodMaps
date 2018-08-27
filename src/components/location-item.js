import React from 'react';

const LocationItem = ({location}) => {
	return (<li className="list-group-item">
		<div className="media">
		<div className="media-body">
		<div className="media-heading">{location.title}</div>
		</div>
		</div>
		</li>);
}

export default LocationItem;