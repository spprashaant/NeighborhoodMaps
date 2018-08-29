import React from 'react';

const LocationItem = (props) => {
	return (<a onClick={(event) => props.onClick(props.location.id)} className="list-group-item">
		<h4 className="list-group-item-heading">{props.location.title}</h4>
		</a>);
}

export default LocationItem;