import React from "react";
import ReactDOM from "react-dom";

class Wifi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="features">
					<i className="fas fa-wifi fa-lg" />
				</div>
				<div className="circle" />
			</div>
		);
	}
}

export default Wifi;
