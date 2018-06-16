import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wifi from "../Wifi.jsx";
import Modal from "../Modal.jsx";
import Coffee from "../Coffee.jsx";
import Icons from "../Icons.jsx";
import Carousel from "../Carousel.jsx";

const Body = styled.div`
	font-family: "Noto Sans", sans-serif;
	color: white;
	transition: margin-right 0.5s;
	padding: 20px;
	background: url(${props => props.photo}) no-repeat center center fixed;
	background-size: cover;
	overflow: hidden;
	cursor: pointer;
	min-height: 400px;
	position: relative;

	@font-face {
		font-family: woff;
		src: url("./Gotham-Ultra.woff");
	}

	select {
		width: 225px;
		height: 30px;
		margin-left: -5px;
		margin-top: 7px;
	}
`;

const ShowCarousel1 = styled.div`
	position: absolute;
	left: 0%;
	height: 300px;
	width: 65%;
	z-index: 3;
`;

const ShowCarousel2 = styled.div`
	position: absolute;
	right: 0%;
	height: 300px;
	width: 20%;
	z-index: 3;
`;

const Breadcrumbs = styled.div`
	font-size: 12.8px;
`;

const HostelName = styled.div`
	font-weight: bold;
	font-family: woff;
	font-size: 35.2px;
	text-shadow: 2px 2px 4px #000000;
`;

const Location = styled.div`
	font-size: 11.2px;
`;

const Marker = styled.i`
	padding-right: 5px;
`;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: false,
			wifi: false,
			coffee: false,
			name: "",
			location: "",
			city: "",
			country: "",
			photos: [],
			location_id: ""
		};
		this.getHostelInfo = this.getHostelInfo.bind(this);
		this.getLocationInfo = this.getLocationInfo.bind(this);
		this.openSearch = this.openSearch.bind(this);
	}

	componentDidMount() {
		let path;
		path = window.location.pathname;
		const id = path.split("/")[1];
		this.getHostelInfo(id);
	}

	getHostelInfo(id) {
		if (!id) {
			id = 1;
		}
		axios
			.get(`/api/locations/hostels/${id}/info`)
			.then(response => {
				const features = response.data[0].features[0];
				const location_id = response.data[0].location_id;
				console.log(location_id);
				this.setState({
					location_id: location_id
				});
				this.getLocationInfo(this.state.location_id);
				if (features.wifi) {
					this.setState({
						wifi: true
					});
				}

				if (features.coffee) {
					this.setState({
						coffee: true
					});
				}
				this.setState({
					name: response.data[0].hostel_name,
					location: response.data[0].street_name,
					photos: response.data[0].photos
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	getLocationInfo(id) {
		axios.get(`/api/locations/${id}/info`).then(response => {
			this.setState({
				city: response.data[0].city,
				country: response.data[0].country
			});
		});
	}

	openSearch(e) {
		e.preventDefault();
		this.setState(prevState => ({
			search: !prevState.search
		}));
	}

	render() {
		return (
			<div>
				{this.state.photos.length > 0 && (
					<Body photo={this.state.photos[0]}>
						<div className="container">
							<Icons
								getHostel={this.getHostelInfo}
								languages={this.props.languages}
								currency={this.props.currency}
								guests={this.props.guests}
								search={this.state.search}
								openSearch={this.openSearch}
							/>
							<ShowCarousel1
								data-toggle="modal"
								data-target="#exampleModal2"
							/>
							<ShowCarousel2
								data-toggle="modal"
								data-target="#exampleModal2"
							/>
							<div style={{ marginTop: "150px" }}>
								<div
									style={{
										display: "flex",
										position: "relative",
										zIndex: "4",
										paddingBottom: "10px"
									}}
								>
									{this.state.wifi ? <Wifi /> : null}
									{this.state.coffee ? <Coffee /> : null}
								</div>
								<Breadcrumbs>
									{" "}
									Home / {this.state.country} /{" "}
									{this.state.city}
								</Breadcrumbs>
								<HostelName> {this.state.name} </HostelName>
								<Location>
									<Marker className="fas fa-map-marker-alt" />
									{this.state.location}, {this.state.city},{" "}
									{this.state.country}
								</Location>
							</div>
							<Modal />

							<Carousel
								photos={this.state.photos}
								closeCarousel={this.toggleCarousel}
							/>
						</div>
					</Body>
				)}
			</div>
		);
	}
}

export default Header;
