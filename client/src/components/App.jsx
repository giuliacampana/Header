import React from "react";
import ReactDOM from "react-dom";
import Features from "./Features.jsx";
import Icons from "./Icons.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Icons />
				<Features />
				<div id="hostelName"> ISLAND HOSTELS </div>
				<div id="location">
					<i className="fas fa-map-marker-alt" />
					48 Station Road, Mountain Lavinia, Colombo, Sri Lanka
				</div>
				<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				  <div class="modal-dialog modal-dialog-centered" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 >Modal title</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        ...
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}

export default App;
