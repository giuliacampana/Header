import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const CoffeeFeature = styled.div``;

class Coffee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div
				style={{
					padding: "0px 20px",
					background: "#3687ca",
					borderRadius: "50%",
					height: "50px",
					width: "50px",
					padding: "12px 0px",
					paddingLeft: "12px"
				}}
			>
				<CoffeeFeature>
					<a data-tip data-for="coffee">
						<i className="fas fa-coffee fa-lg" />
					</a>
					<ReactTooltip id="coffee" type="dark" effect="float">
						<span>Free Breakfast</span>
					</ReactTooltip>
				</CoffeeFeature>
			</div>
		);
	}
}

export default Coffee;
