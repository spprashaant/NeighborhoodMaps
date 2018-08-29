import React, { Component } from 'react';

class LocationFilter extends Component {
	constructor(props){
		super(props);

		this.state = { term: ''};
	}
	render() {
		return (
			<div>
			<input className="locationFilter"
				value={this.state.term}
				onChange={(event) => {
					this.setState({term: event.target.value});
					this.props.onChange(event);
					}

					} />
			</div>
			);
	}
}

export default LocationFilter;