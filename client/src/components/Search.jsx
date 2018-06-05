import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="search">
				<div id="searchDiv"> LOCATION </div>
				<div
					className="input-group add-on col-md-2 date datepicker"
					data-date-format="yyyy-mm-dd"
				>
					<input
						name="name"
						value=""
						type="text"
						className="form-control date-picker"
						data-date-format="yyyy-mm-dd"
					/>
					<div className="input-group-btn">
						<button className="btn btn-default">
							<i className="fa fa-compass" />
						</button>
					</div>
				</div>
				<div id="searchDiv"> CHECK IN </div>
				<div
					className="input-group add-on col-md-2 date datepicker"
					data-date-format="yyyy-mm-dd"
				>
					<input
						name="name"
						value=""
						type="text"
						className="form-control date-picker"
						data-date-format="yyyy-mm-dd"
					/>
					<div className="input-group-btn">
						<button className="btn btn-default">
							<i className="fa fa-calendar" />
						</button>
					</div>
				</div>
				<div id="searchDiv"> CHECK OUT </div>
				<div
					className="input-group add-on col-md-2 date datepicker"
					data-date-format="yyyy-mm-dd"
				>
					<input
						name="name"
						value=""
						type="text"
						className="form-control date-picker"
						data-date-format="yyyy-mm-dd"
					/>
					<div className="input-group-btn">
						<button className="btn btn-default">
							<i className="fa fa-calendar" />
						</button>
					</div>
				</div>
				<div id="searchDiv">
					{" "}
					GUESTS
					<select>
						{this.props.guests.map((guest, i) => {
							return <option key={i}>{guest}</option>;
						})}
					</select>
				</div>
				<button type="button" class="btn btn-search">
					Search
				</button>
			</div>
		);
	}
}

export default Search;
