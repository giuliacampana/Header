import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const Features = styled.div.attrs({
	className: "btn btn-primary"
})`
	z-index: 4;
	border-radius: 50%
	cursor: pointer;
	background: #3687ca
	height: 50px;
	width: 50px;
	padding: 12px 0px;
`;

class Wifi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Features>
					<a data-tip data-for="wifi">
						<i className="fas fa-wifi fa-lg" />
					</a>
					<ReactTooltip id="wifi" type="dark" effect="float">
						<span>Free Wifi</span>
					</ReactTooltip>
				</Features>
			</div>
		);
	}
}

export default Wifi;
