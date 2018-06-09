import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search.jsx";
import NavBar from "./NavBar.jsx";

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
				<div id="searchContainer">
					<div id="hostelLogo">
						RU<a href="https://www.hostelworld.com/">
							inn<i className="fas fa-home fa-sm" />
						</a>{" "}
					</div>
					<div id="searchContainer">
						<i
							data-toggle="modal"
							data-target="#exampleModal"
							id="user"
							className="fas fa-user fa-lg"
						/>
						<i
							onClick={() => {
								this.props.openSearch();
							}}
							id="user"
							className="fas fa-search fa-lg"
						/>
						<i
							onClick={() => {
								this.openNav();
							}}
							id="user"
							className="fas fa-bars fa-lg"
						/>
					</div>
				</div>
				{this.props.search ? (
					<Search guests={this.props.guests} />
				) : null}
			</div>
		);
	}
}

export default Icons;
