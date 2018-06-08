import React from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

class Wifi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="features">
					<a data-tip data-for="wifi">
						<i className="fas fa-wifi fa-lg" />
					</a>
					<ReactTooltip id="wifi" type="dark" effect="float">
						<span>Free Wifi</span>
					</ReactTooltip>
				</div>
				<div className="circle" />
			</div>
		);
	}
}

export default Wifi;
