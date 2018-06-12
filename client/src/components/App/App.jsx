import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import styled from "styled-components";
import Wifi from "../Wifi.jsx";
import Modal from "../Modal.jsx";
import Coffee from "../Coffee.jsx";
import Icons from "../Icons.jsx";
import Carousel from "../Carousel.jsx";

const Body = styled.body`
	font-family: "Noto Sans", sans-serif;
	color: white;
	transition: margin-right 0.5s;
	padding: 20px;
	background: url("./headerimg.png") no-repeat center center fixed;
	background-size: cover;
	height: 100%;
	overflow: hidden;
	z-index: -1;
	cursor: pointer;

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
	height: 500px;
	width: 300px;
	z-index: 3;
`;

const ShowCarousel2 = styled.div`
	position: absolute;
	right: 0%;
	height: 500px;
	width: 250px;
	z-index: 3;
`;

const Breadcrumbs = styled.div`
	font-size: 12.8px;
	position: absolute;
	bottom: 100px;
`;

const HostelName = styled.div`
	font-weight: bold;
	font-family: woff;
	font-size: 50px;
	position: absolute;
	bottom: 30px;
	text-shadow: 2px 2px 4px #000000;
	margin-top: 20px;
`;

const Location = styled.div`
	font-size: 12.8px;
	position: absolute;
	bottom: 10px;
`;
const Marker = styled.i`
	padding-right: 5px;
`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			carousel: false,
			search: false,
			wifi: false,
			coffee: false,
			name: "",
			location: "",
			city: "",
			country: "",
			photos: [],
			id: ""
		};
		this.getHostelInfo = this.getHostelInfo.bind(this);
		this.getLocationInfo = this.getLocationInfo.bind(this);
		this.toggleCarousel = this.toggleCarousel.bind(this);
		this.openSearch = this.openSearch.bind(this);
	}

	componentDidMount() {
		this.getHostelInfo();
		this.getLocationInfo();
	}

	getHostelInfo() {
		axios
			.get(`/api/locations/hostels/99-178-4713/info`)
			.then(response => {
				const features = response.data[0].features[0];
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

	getLocationInfo() {
		axios.get("/api/locations/99/info").then(response => {
			this.setState({
				city: response.data[0].city,
				country: response.data[0].country
			});
		});
	}

	toggleCarousel() {
		if (this.state.search === false) {
			this.setState(prevState => ({
				carousel: !prevState.carousel
			}));
		}
	}

	openSearch() {
		this.setState(prevState => ({
			search: !prevState.search
		}));
	}

	render() {
		return (
			<Body>
				<div>
					<Icons
						languages={this.props.languages}
						currency={this.props.currency}
						guests={this.props.guests}
						search={this.state.search}
						openSearch={this.openSearch}
					/>
					<ShowCarousel1
						onClick={() => {
							this.toggleCarousel();
						}}
					/>
					<ShowCarousel2
						onClick={() => {
							this.toggleCarousel();
						}}
					/>
					{this.state.wifi ? <Wifi /> : null}
					{this.state.coffee ? <Coffee /> : null}
					<Breadcrumbs>
						{" "}
						Home / {this.state.country} / {this.state.city}
					</Breadcrumbs>
					<HostelName> {this.state.name} </HostelName>
					<Location>
						<Marker className="fas fa-map-marker-alt" />
						{this.state.location}, {this.state.city},{" "}
						{this.state.country}
					</Location>
					<Modal />
					{this.state.carousel ? (
						<Carousel
							photos={this.state.photos}
							closeCarousel={this.toggleCarousel}
						/>
					) : null}
				</div>
			</Body>
		);
	}
}

export default App;
