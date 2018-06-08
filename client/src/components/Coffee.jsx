import React from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

class Coffee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="features2">
					<a data-tip data-for="coffee">
						<i className="fas fa-coffee fa-lg" />
					</a>
					<ReactTooltip id="coffee" type="dark" effect="float">
						<span>Free Breakfast</span>
					</ReactTooltip>
				</div>
				<div className="circle2" />
			</div>
		);
	}
}

export default Coffee;
