import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const WifiFeature = styled.div.attrs({
	className: "btn btn-search"
})`
	border-radius: 50%;
	cursor: pointer;
	background: #3687ca;
	height: 50px;
	width: 50px;
	padding: 12px 0px;
	margin-right: 10px;
`;

class Wifi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<WifiFeature>
					<a data-tip data-for="wifi">
						<i className="fas fa-wifi fa-lg" />
					</a>
					<ReactTooltip id="wifi" type="dark" effect="float">
						<span>Free Wifi</span>
					</ReactTooltip>
				</WifiFeature>
			</div>
		);
	}
}

export default Wifi;
