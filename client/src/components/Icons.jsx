import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search.jsx";
import NavBar from "./NavBar.jsx";

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
				<NavBar
					languages={this.props.languages}
					currency={this.props.currency}
					closeNav={this.closeNav}
				/>
				<div id="searchContainer">
					<div id="hostelLogo">
						RU<a>
							inn<i class="fas fa-home fa-sm" />
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
								this.openSearch();
							}}
							id="user"
							className="fas fa-search fa-lg"
						/>
						<i
							onClick={() => {
								if (this.state.carousel) {
									this.props.toggleCarousel();
								}
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
