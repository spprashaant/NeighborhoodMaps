import React from 'react';

const LocationItem = (props) => {
	return (<li onClick={(event) => props.onClick(props.location.id)} className="list-group-item">
		<div className="media">
		<div className="media-body">
		<div className="media-heading">{props.location.title}</div>
		</div>
		</div>
		</li>);
}

export default LocationItem;