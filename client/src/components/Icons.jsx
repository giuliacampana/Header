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
					<a href="https://www.hostelworld.com/">
						<i class="fas fa-home fa-sm" />
						Home
					</a>
					<br />
					<a data-toggle="modal" data-target="#exampleModal">
						<i class="fas fa-sign-in-alt fa-sm" />
						Sign In/ Create Account
					</a>
					<br />
					<p>
						{" "}
						Language
						<select>
							{this.props.languages.map((language, i) => {
								return <option key={i}>{language} </option>;
							})}
						</select>
					</p>
					<br />
					<p>
						{" "}
						Currency
						<select>
							{this.props.currency.map((currency, i) => {
								return <option key={i}>{currency} </option>;
							})}
						</select>
					</p>
					<br />
					<p> Accomodation </p>
					<br />
					<a href="https://www.hostelworld.com/hostels">Hostels</a>
					<br />
					<a href="https://www.hostelworld.com/hotels">Hotels</a>
					<br />
					<a href="https://www.hostelworld.com/bed-and-breakfasts">
						Bed and Breakfasts
					</a>
					<br />
					<p> Explore HOSTELWORLD </p>
					<br />
					<a href="https://www.hostelworld.com/blog/">Blog</a>
					<br />
					<a href="https://www.hostelworld.com/groups">
						Group Bookings
					</a>
					<br />
					<a href="https://www.hostelworld.com/guarantee">
						Booking Guarantee
					</a>
					<br />
					<a href="https://www.hostelworld.com/hoscars">
						Hostel Awards
					</a>
					<br />
					<p> Help </p>
					<br />
					<a href="https://hwhelp.hostelworldgroup.com/hc/en-us">
						Help
					</a>
					<br />
					<p> Work with us </p>
					<br />
					<a href="https://signup.hostelworld.com/en/property/intro">
						Hostel Sign Up
					</a>
					<br />
					<a href="http://partners.hostelworld.com/">
						Affiliate Program
					</a>
					<br />
				</div>
				<div id="searchContainer">
					<div id="hostelLogo">HOSTELWORLD </div>
					<div id="searchContainer">
						<i
							data-toggle="modal"
							data-target="#exampleModal"
							id="user"
							className="fas fa-user fa-lg"
						/>
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
				{this.state.search ? (
					<Search guests={this.props.guests} />
				) : null}
			</div>
		);
	}
}

export default Icons;
