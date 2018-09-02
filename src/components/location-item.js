import React from 'react';

const LocationItem = (props) => {
        return ( < a tabIndex="0" role="link" onKeyDown={
                (event) => props.onClick(event, props.location.id) }   onClick = {
                (event) => props.onClick(event, props.location.id) } > { props.location.title } <
            /a>);
        }

        export default LocationItem;