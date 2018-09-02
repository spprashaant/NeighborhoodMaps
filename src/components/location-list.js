import React from 'react';
import LocationItem from './location-item';

const LocationList = (props) => {
    const locations = props.locations.map((location) => {
        return <LocationItem onClick = { props.onClick } key = { location.id } location = { location }
        />
    })
    return ( <
        section className = "list" > { locations } <
        /section>
    );
}

export default LocationList;