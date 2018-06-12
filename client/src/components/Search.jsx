import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import axios from "axios";

const SearchBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 400px;
	width: 350px;
	background: white;
	color: black;
	float: right;
	font-family: "Noto Sans", sans-serif;
	box-shadow: 5px 10px 18px black;
	font-size: 10px;
	color: #757575;
	z-index: 6;

	form {
		width: auto;
		margin-left: 12px;
	}
`;

const SearchDiv = styled.div`
	padding: 2px;
	margin-left: 10px;
	margin-top: 10px;
`;

const Button = styled.button`
	background: #ed7043;
	color: white;
	width: 100px;
	margin-left: 140px;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-right: 10px;
	margin-left: 15px;
`;

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
				const options = response.data.filter(
					hostel => hostel.city === this.state.location
				);
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

	render() {
		return (
			<SearchBody>
				<SearchDiv> LOCATION </SearchDiv>
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
				<SearchDiv> CHECK IN </SearchDiv>
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
				<SearchDiv> CHECK OUT </SearchDiv>
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
				<SearchDiv>
					{" "}

					GUESTS<br />
					<select
						style={{ width: "300px", marginLeft: "3px" }}
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
				</SearchDiv>
				<Button
					onClick={() => {
						this.getHostelOptions();
					}}
					type="button"
					className="btn btn-search"
				>
					Search
				</Button>
			</SearchBody>
		);
	}
}

export default Search;
