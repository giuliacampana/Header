import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const Features = styled.div`
	position: absolute;
	bottom: 130px;
	z-index: 4;
	margin-bottom: 13px;
	margin-left: 12px;
	cursor: pointer;
`;

const Circle = styled.div`
	position: absolute;
	bottom: 130px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #3687ca;
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
				<Circle />
			</div>
		);
	}
}

export default Wifi;
