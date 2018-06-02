import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search.jsx";

class Icons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: false
		};

		this.closeNav = this.closeNav.bind(this);
		this.openNav = this.openNav.bind(this);
		this.openSearch = this.openSearch.bind(this);
	}

	//onClick function for the menu bars
	closeNav() {
		document.getElementById("sideNav").style.width = "0";
	}

	openNav() {
		document.getElementById("sideNav").style.width = "250px";
	}

	openSearch() {
		this.setState(prevState => ({
			search: !prevState.search
		}));
	}

	render() {
		return (
			<div>
				<div id="sideNav">
					<a
						id="closeBtn"
						onClick={() => {
							this.closeNav();
						}}
					>
						{" "}
						&times;
					</a>
					<br />
					<a> Home </a>
					<br />
					<a> Sign In/ Create Account </a>
					<br />
					<a> Language </a>
					<br />
					<a> Currency </a>
					<br />
					<a> Accomodation </a>
					<br />
					<a> Explore HOSTELWORLD </a>
					<br />
					<a> Help </a>
					<br />
					<a> Work with us </a>
					<br />
				</div>
				<div id="searchContainer">
					<div id="hostelLogo">HOSTELWORLD </div>
					<div id="searchContainer">
						<i id="user" className="fas fa-user fa-lg" />
						<i
							onClick={() => {
								this.openSearch();
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
				{this.state.search ? <Search /> : null}
			</div>
		);
	}
}

export default Icons;
