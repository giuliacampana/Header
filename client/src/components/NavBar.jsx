import React from "react";
import ReactDOM from "react-dom";

const NavBar = props => (
	<div id="sideNav">
		<a
			id="closeBtn"
			onClick={() => {
				props.closeNav();
			}}
		>
			{" "}
			&times;
		</a>
		<a href="https://www.hostelworld.com/">
			<i className="fas fa-home fa-sm" />
			Home
		</a>
		<br />
		<a data-toggle="modal" data-target="#exampleModal">
			<i className="fas fa-sign-in-alt fa-sm" />
			Sign In/ Create Account
		</a>
		<br />
		<p>
			{" "}
			Language
			<select>
				{props.languages.map((language, i) => {
					return <option key={i}> {language} </option>;
				})}
			</select>
		</p>
		<br />
		<p>
			{" "}
			Currency
			<select>
				{props.currency.map((currency, i) => {
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
		<a href="https://www.hostelworld.com/groups">Group Bookings</a>
		<br />
		<a href="https://www.hostelworld.com/guarantee">Booking Guarantee</a>
		<br />
		<a href="https://www.hostelworld.com/hoscars">Hostel Awards</a>
		<br />
		<p> Help </p>
		<br />
		<a href="https://hwhelp.hostelworldgroup.com/hc/en-us">Help</a>
		<br />
		<p> Work with us </p>
		<br />
		<a href="https://signup.hostelworld.com/en/property/intro">
			Hostel Sign Up
		</a>
		<br />
		<a href="http://partners.hostelworld.com/">Affiliate Program</a>
		<br />
	</div>
);

export default NavBar;
