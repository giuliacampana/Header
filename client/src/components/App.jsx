import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div class="user">
					<div id="hostelLogo">HOSTELWORLD </div>
					<i class="fas fa-user" />
				</div>
				<div class="features">
					<i class="fas fa-wifi fa-lg" />
				</div>
				<div class="circle" />
				<div class="features2">
					<i class="fas fa-coffee fa-lg" />
				</div>
				<div class="circle2" />
				<div id="hostelName"> ISLAND HOSTELS </div>
				<div id="location">
					<i class="fas fa-map-marker-alt" />
					48 Station Road, Mountain Lavinia, Colombo, Sri Lanka
				</div>
			</div>
		);
	}
}

export default App;
