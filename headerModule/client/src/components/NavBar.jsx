import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const SideNav = styled.div`
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 7;
	top: 0;
	right: 0;
	background-color: #262626;
	overflow-x: hidden;
	padding-top: 60px;
	transition: 0.5s;

	p {
		padding: 0px 4px 4px 16px;
		text-decoration: none;
		font-size: 12px;
		color: #818181;
		display: block;
		transition: 0.3s;
	}

	a {
		padding: 0px 4px 4px 16px;
		text-decoration: none;
		font-size: 12px;
		color: #ed7043;
		display: block;
		transition: 0.3s;
	}
`;

const Icon = styled.i`
	padding-right: 5px;
`;

const CloseButton = styled.a`
	position: absolute;
	top: 0;
	right: 25px;
`;

const NavBar = props => (
	<SideNav id="sideNav">
		<CloseButton
			id="closeBtn"
			onClick={() => {
				props.closeNav();
			}}
		>
			{" "}
			&times;
		</CloseButton>
		<a href="https://www.hostelworld.com/">
			<Icon className="fas fa-home fa-sm" />
			Home
		</a>
		<br />
		<a
			style={{ color: "#ed7043" }}
			data-toggle="modal"
			data-target="#exampleModal"
		>
			<Icon className="fas fa-sign-in-alt fa-sm" />
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
	</SideNav>
);

export default NavBar;
