import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const Features2 = styled.div.attrs({
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

class Coffee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={{ padding: "0px 10px" }}>
				<Features2>
					<a data-tip data-for="coffee">
						<i className="fas fa-coffee fa-lg" />
					</a>
					<ReactTooltip id="coffee" type="dark" effect="float">
						<span>Free Breakfast</span>
					</ReactTooltip>
				</Features2>
			</div>
		);
	}
}

export default Coffee;
