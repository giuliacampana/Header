import React from "react";
import ReactDOM from "react-dom";

class Features extends React.Component {
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
				<div className="features2">
					<i className="fas fa-coffee fa-lg" />
				</div>
				<div className="circle2" />
			</div>
		);
	}
}

export default Features;
