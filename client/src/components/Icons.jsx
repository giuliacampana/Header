import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Search from "./Search.jsx";
import NavBar from "./NavBar.jsx";

const SearchContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`;

const HostelLogo = styled.div`
	font-family: woff;
	font-size: 40px;
	cursor: pointer;
	text-shadow: 2px 2px 4px #000000;

	a {
		font-family: woff;
		font-size: 40px;
		cursor: pointer;
		color: red;
		text-shadow: 2px 2px 4px #000000;
	}
`;

const User = styled.i`
	display: flex;
	flex-direction: row;
	margin: 10px;
	padding: 5px;
	cursor: pointer;
	z-index: 1;
`;

class Icons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.closeNav = this.closeNav.bind(this);
		this.openNav = this.openNav.bind(this);
	}

	closeNav() {
		document.getElementById("sideNav").style.width = "0";
	}

	openNav() {
		document.getElementById("sideNav").style.width = "250px";
	}

	render() {
		return (
			<div>
				<NavBar
					languages={this.props.languages}
					currency={this.props.currency}
					closeNav={this.closeNav}
				/>
				<SearchContainer>
					<HostelLogo>
						RU<a href="https://www.hostelworld.com/">
							inn<i className="fas fa-home fa-sm" />
						</a>{" "}
					</HostelLogo>
					<SearchContainer>
						<User
							data-toggle="modal"
							data-target="#exampleModal"
							id="user"
							className="fas fa-user fa-lg"
						/>
						<User
							onClick={() => {
								this.props.openSearch();
							}}
							id="user"
							className="fas fa-search fa-lg"
						/>
						<User
							onClick={() => {
								this.openNav();
							}}
							id="user"
							className="fas fa-bars fa-lg"
						/>
					</SearchContainer>
				</SearchContainer>
				{this.props.search ? (
					<Search guests={this.props.guests} />
				) : null}
			</div>
		);
	}
}

export default Icons;
