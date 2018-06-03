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
						<i class="fas fa-home fa-sm"></i> 
						Home 
					</a>
					<br />
					<a> 
						<i class="fas fa-sign-in-alt fa-sm"></i>
						Sign In/ Create Account 
					</a>
					<br />
					<p> Language 
						<select>
							<option> cesky </option>
							<option> Dansk </option>
							<option> Deutsch </option>
							<option> English </option>
							<option> Español </option>
							<option> Français </option>
							<option> Italiano </option>
							<option> Nederlands </option>
							<option> Norsk </option>
							<option> Polski </option>
							<option> Português </option>
							<option> Português (Brasil) </option>
							<option> Svenska </option>
							<option> Suomi </option>
							<option> Türk </option>
						</select>
					</p>
					<br />
					<p> Currency 
						<select>
							<option> EUR </option>
							<option> GBP </option>
							<option> USD </option>
							<option> ---- </option>
							<option> AED </option>
							<option> ALL </option>
							<option> AMD </option>
							<option> ARS </option>
							<option> AUD </option>
							<option> AZN </option>
							<option> BDT </option>
							<option> BHD </option>
							<option> BND </option>
							<option> BOB </option>
							<option> BRL </option>
							<option> BSD </option>
							<option> BZD </option>
							<option> CAD </option>
							<option> CHF </option>
							<option> CLP </option>
							<option> CNY </option>
							<option> COP </option>
							<option> CRC </option>
							<option> CUC </option>
							<option> CZK </option>
							<option> DJF </option>
							<option> DKK </option>
							<option> DOP </option>
							<option> DZD </option>
							<option> EGP </option>
							<option> EUR </option>
							<option> FJD </option>
							<option> GBP </option>
							<option> HKD </option>
							<option> HNL </option>
							<option> HRK </option>
							<option> HUF </option>
							<option> IDR </option>
							<option> ILS </option>
							<option> INR </option>
							<option> ISK </option>
							<option> JOD </option>
							<option> JPY </option>
							<option> KES </option>
							<option> KGS </option>
							<option> KHR </option>
							<option> KMF </option>
							<option> KRW </option>
							<option> KWD </option>
							<option> KZT </option>
							<option> LAK </option>
							<option> LBP </option>
							<option> LKR </option>
							<option> MAD </option>
							<option> MNT </option>
							<option> MRO </option>
							<option> MUR </option>
							<option> MXN </option>
							<option> MYR </option>
							<option> NAD </option>
							<option> NIO </option>
							<option> NOK </option>
							<option> NPR </option>
							<option> NZD </option>
							<option> OMR </option>
							<option> PEN </option>
							<option> PGK </option>
							<option> PHP </option>
							<option> PKR </option>
							<option> PLN </option>
							<option> PYG </option>
							<option> QAR </option>
							<option> RON </option>
							<option> RUB </option>
							<option> RWF </option>
							<option> SAR </option>
							<option> SEK </option>
							<option> SGD </option>
							<option> SOS </option>
							<option> SZL </option>
							<option> THB </option>
							<option> TND </option>
							<option> TOP </option>
							<option> TRY </option>
							<option> TTD </option>
							<option> TWD </option>
							<option> TZS </option>
							<option> UAH </option>
							<option> UGX </option>
							<option> USD </option>
							<option> UYU </option>
							<option> VEF </option>
							<option> VND </option>
							<option> VUV </option>
							<option> WST </option>
							<option> XAF </option>
							<option> XCD </option>
							<option> XOF </option>
							<option> XPF </option>
							<option> ZAR </option>
						</select>
					</p>
					<br />
					<p> Accomodation </p>
					<br />
					<a href="https://www.hostelworld.com/hostels"> 
						Hostels 
					</a>
					<br />
					<a href="https://www.hostelworld.com/hotels"> 
						Hotels 
					</a>
					<br />
					<a href="https://www.hostelworld.com/bed-and-breakfasts"> 
						Bed and Breakfasts 
					</a>
					<br />
					<p> Explore HOSTELWORLD </p>
					<br />
					<a href="https://www.hostelworld.com/blog/"> 
						Blog 
					</a>
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
