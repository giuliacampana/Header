import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Wifi from "./Wifi.jsx";
import Modal from "./Modal.jsx";
import Coffee from "./Coffee.jsx";
import Icons from "./Icons.jsx";
import Carousel from "./Carousel.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			carousel: false,
			wifi: false,
			coffee: false,
			name: "",
			location: "",
			city: "",
			country: ""
		};
		this.getHostelInfo = this.getHostelInfo.bind(this);
		this.getLocationInfo = this.getLocationInfo.bind(this);
		// this.ComponentDidMount = this.ComponentDidMount.bind(this);
	}

	// ComponentDidMount() {
	// 	this.getPhotos();
	// }

	getHostelInfo() {
		axios
			.get("/locations/hostels/hosetelId/pictures")
			.then(response => {
				console.log(response.data[0]);
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
					name: response.data[3].hostel_name,
					location: response.data[3].street_name,
					photos: response.data[3].photos
					//carousel: true
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	getLocationInfo() {
		axios.get("/locations/hostels").then(response => {
			console.log(response.data[0]);
			this.setState({
				city: response.data[0].city,
				country: response.data[0].country
			});
		});
	}

	render() {
		return (
			<div
				onClick={() => {
					this.getHostelInfo();
					this.getLocationInfo();
				}}
			>
				<Icons
					languages={this.props.languages}
					currency={this.props.currency}
					guests={this.props.guests}
				/>
				{this.state.wifi ? <Wifi /> : null}
				{this.state.coffee ? <Coffee /> : null}
				<div id="hostelName"> {this.state.name} </div>
				<div id="location">
					<i className="fas fa-map-marker-alt" />
					{this.state.location}, {this.state.city},{" "}
					{this.state.country}
				</div>
				<Modal />
				{this.state.carousel ? (
					<Carousel photos={this.state.photos} />
				) : null}
			</div>
		);
	}
}

export default App;
