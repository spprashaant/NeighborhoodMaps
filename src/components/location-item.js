import React from 'react';

const LocationItem = (props) => {
        return ( < a onClick = {
                (event) => props.onClick(props.location.id) } > { props.location.title } <
            /a>);
        }

        export default LocationItem;