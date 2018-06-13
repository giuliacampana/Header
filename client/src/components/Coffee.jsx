import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const Features2 = styled.div`
	position: absolute;
	bottom: 23%;
	z-index: 4;
	margin-bottom: 13px;
	margin-left: 82px;
	cursor: pointer;
`;

const Circle2 = styled.div`
	position: absolute;
	bottom: 23%;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-left: 70px;
	background: #3687ca;
`;

class Coffee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Features2>
					<a data-tip data-for="coffee">
						<i className="fas fa-coffee fa-lg" />
					</a>
					<ReactTooltip id="coffee" type="dark" effect="float">
						<span>Free Breakfast</span>
					</ReactTooltip>
				</Features2>
				<Circle2 />
			</div>
		);
	}
}

export default Coffee;
