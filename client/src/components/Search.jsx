import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="search">
				<div> Location </div>
				<br />
				<div> Check In </div>
				<br />
				<div> Check Out </div>
				<br />
				<div> Guests </div>
				<br />
			</div>
		);
	}
}

export default Search;
