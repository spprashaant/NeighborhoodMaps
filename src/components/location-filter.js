import React, { Component } from 'react';

class LocationFilter extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return ( <
            div >
            <label for="filter">Filter Locations</label>
            <
            input role="" placeholder = "Filter Foursquare locations"
            className = "form-control locationFilter"
            value = { this.state.term } onChange = {
                (event) => {
                    this.setState({ term: event.target.value });
                    this.props.onChange(event);
                }

            }
            id="filter"
            />

             <
            /div>
        );
    }
}

export default LocationFilter;