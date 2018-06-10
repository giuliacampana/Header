import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Wifi from "../Wifi.jsx";
import Modal from "../Modal.jsx";
import Coffee from "../Coffee.jsx";
import Icons from "../Icons.jsx";
import Carousel from "../Carousel.jsx";

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
			<div>
				<Icons
					languages={this.props.languages}
					currency={this.props.currency}
					guests={this.props.guests}
					search={this.state.search}
					openSearch={this.openSearch}
				/>
				<div
					onClick={() => {
						this.toggleCarousel();
					}}
					id="showCarousel1"
				/>
				<div
					onClick={() => {
						this.toggleCarousel();
					}}
					id="showCarousel2"
				/>
				{this.state.wifi ? <Wifi /> : null}
				{this.state.coffee ? <Coffee /> : null}
				<div id="breadcrumbs">
					{" "}
					Home / {this.state.country} / {this.state.city}
				</div>
				<div id="hostelName"> {this.state.name} </div>
				<div id="location">
					<i className="fas fa-map-marker-alt" />
					{this.state.location}, {this.state.city},{" "}
					{this.state.country}
				</div>
				<Modal />
				{this.state.carousel ? (
					<Carousel
						photos={this.state.photos}
						closeCarousel={this.toggleCarousel}
					/>
				) : null}
			</div>
		);
	}
}

export default App;
