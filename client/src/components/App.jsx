import React from "react";
import ReactDOM from "react-dom";
import Features from "./Features.jsx";
import Icons from "./Icons.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Icons />
				<Features />
				<div id="hostelName"> ISLAND HOSTELS </div>
				<div id="location">
					<i className="fas fa-map-marker-alt" />
					48 Station Road, Mountain Lavinia, Colombo, Sri Lanka
				</div>
			</div>
		);
	}
}

export default App;
