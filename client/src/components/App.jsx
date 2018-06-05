import React from "react";
import ReactDOM from "react-dom";
import Features from "./Features.jsx";
import axios from "axios";
import Icons from "./Icons.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: []
		};
		this.getPhotos= this.getPhotos.bind(this);
	}

	getPhotos() {
		axios.get('/locations/hostels/hosetelId/pictures')
		.then((response) => {
			console.log(response.data[0]);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	render() {
		return (
			<div onClick={()=> {this.getPhotos()}}>
				<Icons />
				<Features />
				<div id="hostelName"> ISLAND HOSTELS </div>
				<div id="location">
					<i className="fas fa-map-marker-alt" />
					48 Station Road, Mountain Lavinia, Colombo, Sri Lanka
				</div>
				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				        <div className="modal-title" id="exampleModalLabel">Sign in or <a
				        href="https://tsecure.hostelworld.com/en/signup">Sign up</a>
				        </div>
				      </div>
				      <div className="modal-body">
				        <form role="form">
		                    <div class="form-group">
		                      <label for="usrname"> EMAIL ADDRESS/ USERNAME</label>
		                      <input type="text" class="form-control" id="usrname" placeholder="Username/email address" />
		                    </div>
		                    <div class="form-group">
		                      <label for="psw">PASSWORD</label>
		                      <input type="text" class="form-control" id="psw" placeholder="Password"/>
		                    </div>
				        </form>
				      </div>
				      <div className="modal-footer">
				      	<a> Forgot password? </a>
				      	<button type="button" className="btn btn-search">Login</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}

export default App;
