import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: "",
			checkIn: "",
			checkOut: "",
			guests: "",
			options: []
		};
	}

	handleChangeLocation(e) {
		this.setState({
			location: e.target.value
		});
	}

	handleChangeCheckIn(e) {
		this.setState({
			checkIn: e.target.value
		});
	}

	handleChangeCheckOut(e) {
		this.setState({
			checkOut: e.target.value
		});
	}

	chooseGuest(e) {
		this.setState({
			guests: e.target.value
		});
	}

	getHostelOptions() {
		axios
			.get("/locations/hostels")
			.then(response => {
				const options = [];
				console.log("get hostel options", response.data);
				for (let i = 0; i < response.data.length; i += 1) {
					if (response.data[i].city === this.state.location) {
						options.push(response.data[i]);
					}
				}
				this.setState({
					options: options
				});

				if (this.state.location === "" && options.length === 0) {
					alert(
						"I do not think you entered a city. Please try again"
					);
				} else if (options.length === 0) {
					alert(
						"Sorry there are no hostels in that location. Please enter another city!"
					);
				} else {
					alert(
						`There are ${
							this.state.options.length
						} location(s) for you to choose from!
						${this.state.options.map(
							(option, i) =>
								`\n${i + 1}) ${option.city}, ${
									option.country
								}: ${
									option.hostels.length
								} hostel(s) available `
						)}`
					);
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	// https://codepen.io/Rio517/pen/NPLbpP

	render() {
		return (
			<div id="search">
				<div id="searchDiv"> LOCATION </div>
				<form>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							value={this.state.location}
							onChange={e => this.handleChangeLocation(e)}
							placeholder="Search hostels by city..."
						/>
						<div className="input-group-btn">
							<button className="btn btn-default" type="submit">
								<i className="fa fa-compass" />
							</button>
						</div>
					</div>
				</form>
				<div id="searchDiv"> CHECK IN </div>
				<form>
					<div className="input-group">
						<input
							type="text"
							value={this.state.checkIn}
							onChange={e => this.handleChangeCheckIn(e)}
							className="form-control"
							placeholder={new Date().toDateString().substring(4)}
						/>
						<div className="input-group-btn">
							<button className="btn btn-default" type="submit">
								<i className="fa fa-calendar" />
							</button>
						</div>
					</div>
				</form>
				<div id="searchDiv"> CHECK OUT </div>
				<form>
					<div className="input-group">
						<input
							type="text"
							value={this.state.checkOut}
							onChange={e => this.handleChangeCheckOut(e)}
							className="form-control"
							placeholder={new Date().toDateString().substring(4)}
						/>
						<div className="input-group-btn">
							<button className="btn btn-default" type="submit">
								<i className="fa fa-calendar" />
							</button>
						</div>
					</div>
				</form>
				<div id="searchDiv">
					{" "}
					GUESTS<br />
					<select
						onChange={e => this.chooseGuest(e)}
						value={this.state.guests}
					>
						{this.props.guests.map((guest, i) => {
							return (
								<option value={guest} key={i}>
									{guest}
								</option>
							);
						})}
					</select>
				</div>
				<button
					onClick={() => {
						this.getHostelOptions();
					}}
					type="button"
					class="btn btn-search"
				>
					Search
				</button>
			</div>
		);
	}
}

export default Search;
