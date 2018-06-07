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
				<form>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Search"
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
							className="form-control"
							placeholder="Search"
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
							className="form-control"
							placeholder="Search"
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
